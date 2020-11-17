using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.ContactUsRepository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly IContectUsRepoistory _contectUsRepoistory;

        public ContactUsController( IContectUsRepoistory contectUsRepoistory)
        {
            _contectUsRepoistory = contectUsRepoistory;
        }
        // GET: api/<ContactUsController>
        [HttpGet]
        public async Task<ActionResult<IList<ContactUs>>> Get()
        {
            var messages = await _contectUsRepoistory.get_messages();
            return Ok(messages);
        }

        // GET api/<ContactUsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactUs>> Get(int id)
        {
            var message = await _contectUsRepoistory.get_message(id);
            return Ok(message);
        }

        // POST api/<ContactUsController>
        [HttpPost]
        public async Task<ActionResult> Post(ContactUs message)
        {
           await _contectUsRepoistory.send_message(message);
            return StatusCode(202,message);
        }
        // DELETE api/<ContactUsController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _contectUsRepoistory.delete_message(id);
            return StatusCode(202);
        }
    }
}
