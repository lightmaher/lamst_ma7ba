using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IRepEvent _repEvent;

        public EventsController(IRepEvent repEvent)
        {
            _repEvent = repEvent;
        }
        [HttpGet]
        public async Task<ActionResult<IList<Event>>> get()
        {
            IList<Event> evts = await _repEvent.GetAllEvents();
            return Ok(evts);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> getEvent(int id)
        {
            var evt =  await _repEvent.GetEvent(id);
            return Ok(evt);
        }
        [HttpPost]
        public async Task<ActionResult> post(Event evt)
        {
            await _repEvent.AddEvent(evt);
            return StatusCode(202);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> delete (int id)
        {
            if (_repEvent.isexist(id))
            {
                await _repEvent.DeleteEvent(id);
                return StatusCode(202);
            }
            return StatusCode(400);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Event evt)
        {
            if (_repEvent.isexist(id))
            {
              await  _repEvent.UpdateEvent(id, evt);
                return StatusCode(202);
            }
            return StatusCode(400);
        }
        [HttpPost("join")]
        public async Task<ActionResult> joinEvent(Join join)
        {
            if (join != null)
            {
                await _repEvent.joinEvent(join);
                return StatusCode(202);
            }
            else
            {
                return StatusCode(402);
            }
        }
       [HttpDelete("join/{id}")]
        public async Task<ActionResult> joinDelete(int id)
        {
            if (id != 0)
            {
                await _repEvent.joinDelete(id);
                return StatusCode(202);
            }
            else
            {
                return StatusCode(402);
            }
        }
        [HttpPost("upload"), DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            try
             {
                var file = Request.Form.Files[0];
                var folderName = System.IO.Path.Combine("wwwroot");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var url = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Ok(new { url });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
