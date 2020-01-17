using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Homebuilder.Domain.Views.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum StateEnumView
    {
        None = 0,
        HighPrice = 1,
        Medium = 2,
        Final = 3
    }
}
