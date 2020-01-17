using Homebuilder.Domain.Views;
using System.Threading.Tasks;

namespace Homebuilder.Domain.Services.Interfaces
{
    public interface IToDoService
    {
        Task<GetAllToDoView> GetAll();
        Task<bool> Update(UpdateToDoView view);
    }
}
