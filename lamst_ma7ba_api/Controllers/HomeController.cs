using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.PlaceRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IRepEvent repEvent;
        private readonly IPlaceRepo repPlace;

        public HomeController(IRepEvent repEvent, IPlaceRepo repPlace)
        {
            this.repEvent = repEvent;
            this.repPlace = repPlace;
        }
  
        [HttpGet("Events")]
        public async Task<ActionResult<IList<Event>>> GetEvents()
        {
            var events = await repEvent.getHomeEvents();
            return Ok(events);
        }
        [HttpGet("Places")]
        public async Task<ActionResult<IList<Event>>> GetPlaces()
        {
            var places = await repPlace.getHomePlacesAsync();
            return Ok(places);
        }

        // POST api/<HomeController>

    }
}
