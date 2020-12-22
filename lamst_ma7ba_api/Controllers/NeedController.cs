using System;
using System.Collections.Generic;
using System.Linq;
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
        [HttpPost]
        [Route("EditNeed")]
        public async Task<IActionResult> EditNeed(Need model)
        {
            if (ModelState.IsValid)
            {
                var need = await _needRepo.EditNeedAsync(model);
                if(need != null)
                {
                    return Ok(need);
                }
            }
            return BadRequest();
        }
    }
}