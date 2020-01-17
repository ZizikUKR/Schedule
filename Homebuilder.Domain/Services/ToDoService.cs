﻿using Homebuilder.Domain.Entities;
using Homebuilder.Domain.Entities.Enums;
using Homebuilder.Domain.Repositories;
using Homebuilder.Domain.Services.Interfaces;
using Homebuilder.Domain.Views;
using Homebuilder.Domain.Views.Enums;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homebuilder.Domain.Services
{
    public class ToDoService : IToDoService
    {
        private readonly IToDoTaskRepository _toDoTaskRepository;
        public ToDoService(IToDoTaskRepository toDoTaskRepository)
        {
            _toDoTaskRepository = toDoTaskRepository;
        }

        #region Public Methods
        
        public async Task<GetAllToDoView> GetAll()
        {
            var existingToDos = await _toDoTaskRepository.GetAll();
            var result = new GetAllToDoView();
            result.ToDos = existingToDos.Select(p => MapToDoTaskToView(p)).ToList();

            return result;
        }

        public async Task<bool> Update(UpdateToDoView view)
        {
            var toDoTask = await _toDoTaskRepository.Get(view.Id);
            if(toDoTask is null)
            {
                throw new Exception("TodoTask dosen't exist");
            }
            MapViewToEntity(toDoTask, view);
            await _toDoTaskRepository.Update(toDoTask);

            return true;
        }
        #endregion Public Methods

        #region Mapping        
        private ToDoTaskGetAllViewItem MapToDoTaskToView(ToDoTask entity)
        {
            var result = new ToDoTaskGetAllViewItem();
            if (!Enum.TryParse(entity.State.ToString(), out StateEnumView state))
            {
                throw new Exception("Can't parse ToDo State");
            }
            result.Id = entity.id;
            result.Description = entity.Description;
            result.Information = entity.Information;
            result.IsComppleted = entity.IsComppleted;
            result.ToDo = entity.ToDo;
            result.CreationDate = entity.CreationDate;
            result.State = state;

            return result;
        }

        private void MapViewToEntity(ToDoTask entity, UpdateToDoView view)
        {
            if(!Enum.TryParse(view.State.ToString(),out State state))
            {
                throw new Exception("Can't parse ToDo State");
            }
            entity.State = state;
            entity.Information = view.Information;
            entity.IsComppleted = view.IsComppleted;
            entity.ToDo = view.ToDo;
            entity.Description = view.Description;
        }

        #endregion Mapping 
    }
}