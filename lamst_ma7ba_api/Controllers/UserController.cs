using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.UserRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRep _Userrep;

        public UserController( IUserRep userRep)
        {
            _Userrep = userRep;
        }
        // GET: api/<UserController>
        [HttpGet]
        public async Task<ActionResult<IList<User>>> Index()
        {
            IList<User> users = await _Userrep.ShowUsers();
            return Ok(users);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> showuser(int id)
        {
            if (id != 0)
            {

                var user = await _Userrep.ShowUser(id);
                return Ok(user);
            }
            else
                return StatusCode(404);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post(User user)
        {
            if (user != null)
            {
                await _Userrep.AddUser(user);
                return StatusCode(202);
            }
            else
                return StatusCode(400);
        }
        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _Userrep.DeleteUser(id);
            return StatusCode(202);
        }
    }
}
