using Homebuilder.Domain.Entities.Enums;

namespace Homebuilder.Domain.Entities
{
    public class ToDoTask : BaseEntity
    {
        public string ToDo { get; set; }
        public string Description { get; set; }
        public string Information { get; set; }
        public bool IsComppleted { get; set; }
        public State State { get; set; }
    }
}
