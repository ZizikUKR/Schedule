using Dapper.Contrib.Extensions;
using System;


namespace Homebuilder.Domain.Entities
{
    public class BaseEntity
    {
        [Key]
        public long id { get; set; }

        public DateTime CreationDate { get; set; }
        public BaseEntity()
        {
            CreationDate = DateTime.UtcNow;
        }
    }
}
