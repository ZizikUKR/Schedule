using Homebuilder.Domain.Entities;
using Homebuilder.Domain.Repositories;
using Microsoft.Extensions.Configuration;

namespace Homebuilder.Infrastructure.Repositories
{
    public class ToDoTaskRepository : BaseRepository<ToDoTask>, IToDoTaskRepository
    {
        public ToDoTaskRepository(IConfiguration configuration) : base(configuration, "ToDoTask")
        {
        }
    }
}
