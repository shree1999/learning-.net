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

    }
}