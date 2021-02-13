using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ActivityHandler;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace API.Controllers
{
    public class ActivitiesController : Base
    {
        
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetAllActivities()
        {
            return await Mediator.Send(new ListActivities.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetSingleActivity (Guid id)
        {
            return await Mediator.Send(new SingleActivity.Query() {Id = id});
        }
    }
}