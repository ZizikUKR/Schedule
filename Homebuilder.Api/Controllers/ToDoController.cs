using Homebuilder.Domain.Services.Interfaces;
using Homebuilder.Domain.Views;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;

namespace Homebuilder.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoService _toDoService;
        public ToDoController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var result =await _toDoService.GetAll();
            return Ok(result);
        }

        [HttpPut]
        public async Task<ActionResult> Update([FromBody] UpdateToDoView view)
        {
            if (view == null)
            {
                throw new Exception("Invalid model");
            }
            var result =  await _toDoService.Update(view);
            return Ok(result);
        }
    }
}
