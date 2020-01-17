using Dapper;
using Dapper.Contrib.Extensions;
using Homebuilder.Domain.Entities;
using Homebuilder.Domain.Repositories;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Homebuilder.Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        protected readonly string _tableName;
        private string _connectionString;

        protected IDbConnection Connection
        {
            get
            {
                return new NpgsqlConnection(_connectionString);
            }
        }
        public BaseRepository(IConfiguration configuration, string tableName)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
            _tableName = tableName;
        }

        public async Task<T> Get(string id)
        {
            return await Connection.GetAsync<T>(id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await Connection.GetAllAsync<T>();
        }

        public virtual async Task Update(T entity)
        {
            var columns = GetColumns();
            var stringOfColumns = string.Join(", ", columns.Select(e => $"{e} = @{e}"));
            var query = $"update {_tableName} set {stringOfColumns} where Id = @Id";

            await Connection.ExecuteAsync(query, entity);
        }

        public async Task Add(T item)
        {
            var sql = string.Empty;
            var columns = GetColumns();
            var stringOfColumns = string.Join(", ", columns);
            var stringOfParameters = string.Join(", ", columns.Select(e => "@" + e));
            sql += $"insert into {_tableName} ({stringOfColumns}) values ({stringOfParameters});";
            await Connection.ExecuteAsync(sql, item);
        }

        public async Task Add(IEnumerable<T> entity)
        {
            var sql = string.Empty;
            var columns = GetColumns();
            var stringOfColumns = string.Join(", ", columns);
            var stringOfParameters = string.Join(", ", columns.Select(e => "@" + e));
            sql += $"insert into {_tableName} ({stringOfColumns}) values ({stringOfParameters});";
            await Connection.ExecuteAsync(sql, entity);
        }

        public async Task Delete(T entity)
        {
            await Connection.DeleteAsync(entity);
        }
        protected IEnumerable<string> GetColumns()
        {
            var a = typeof(T).GetProperties();
            var b = a.Where(e => !Attribute.IsDefined(e, typeof(ForeignKeyAttribute)) && !Attribute.IsDefined(e, typeof(NotMappedAttribute)) && !Attribute.IsDefined(e, typeof(DatabaseGeneratedAttribute))
            && !Attribute.IsDefined(e, typeof(ComputedAttribute))).ToList();
            var c = b.Select(e => e.Name);
            return c;
        }
    }
}
