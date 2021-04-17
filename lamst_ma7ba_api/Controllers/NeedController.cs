using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.NeedRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NeedController : ControllerBase
    {
        private readonly INeedRepo _needRepo;

        public NeedController(INeedRepo needRepo)
        {
            _needRepo = needRepo;
        }
        [HttpGet]
        [Route("GetAllNeeds")]
        public async Task<IEnumerable<Need>> GetAllNeeds()
        {
            var needs = await _needRepo.GetAllNeedsAsync();
            if (needs == null)
                return null;
            return needs;
        }
        [HttpPost]
        [Route("AddNeed")]
        public async Task<IActionResult> AddNeed(Need model)
        {
            if (ModelState.IsValid)
            {
                var need = await _needRepo.AddNeedAsync(model);
                if (need != null)
                    return Ok(need);
            }
            return BadRequest();
        }
        [HttpPut]
        [Route("EditNeed")]
        public async Task<IActionResult> EditNeed(Need model)
        {
            if (ModelState.IsValid)
            {
                var need = await _needRepo.EditNeedAsync(model);
                if (need != null)
                {
                    return Ok(need);
                }
            }
            return BadRequest();
        }
        [HttpGet]
        [Route("GetNeed/{id}")]
        public async Task<ActionResult<Need>> GetNeed(int id)
        {
            var need = await _needRepo.GetNeedAsync(id);
            if (need != null)
                return need;
            return null;
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNeed (int id) {
            if (id != 0) {
                await _needRepo.DeleteAsync(id);
                return StatusCode(202);
            }
            else
            {
                return BadRequest();
            }
        } 
    }
}