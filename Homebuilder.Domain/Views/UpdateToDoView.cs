using Homebuilder.Domain.Views.Enums;

namespace Homebuilder.Domain.Views
{
    public class UpdateToDoView
    {
        public long Id { get; set; }
        public string ToDo { get; set; }
        public string Description { get; set; }
        public string Information { get; set; }
        public bool IsComppleted { get; set; }
        public StateEnumView State { get; set; }
    }
}
