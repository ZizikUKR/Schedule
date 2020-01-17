using Homebuilder.Domain.Entities;
using Homebuilder.Domain.Entities.Enums;
using Homebuilder.Domain.Providers;
using Homebuilder.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Homebuilder.Domain.Config
{
    public static class InitializerDB
    {
        public async static void Initialize()
        {
            var serviceProvider = StaticServiceProvider.GetProvider();
            var toDoRepository = serviceProvider.GetService(typeof(IToDoTaskRepository)) as IToDoTaskRepository;
            var allTodos = (await toDoRepository.GetAll()).ToList();
            if (!allTodos.Any())
            {
                var res = new List<ToDoTask>
            {
                new ToDoTask {CreationDate=DateTime.UtcNow,ToDo = "Buy Windows",Description="#DE 8009 Description lorem ipsum lorem ipsum",Information="ABC",IsComppleted=false,State=State.HighPrice },
                new ToDoTask {CreationDate=DateTime.UtcNow,ToDo = "Find Contractors",Description="#DE 2100 Description lorem ipsum lorem ipsum",Information="Tommorow",IsComppleted=false,State=State.Medium },
                new ToDoTask {CreationDate=DateTime.UtcNow,ToDo = "Prints of plans",Description="#DE 1234 Description lorem ipsum lorem ipsum",Information="5 copies",IsComppleted=false,State=State.Final },
            };
                await toDoRepository.Add(res);
            }
        }
    }
}