using System.Runtime.Serialization;

namespace Homebuilder.Domain.Views.Enums
{
    public enum StateEnumView
    {
        None = 0,
        [EnumMember(Value = "High Price")]
        HighPrice = 1,
        Medium = 2,
        Final = 3
    }
}
