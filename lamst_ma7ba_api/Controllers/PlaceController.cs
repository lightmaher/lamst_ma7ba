using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.PlaceRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaceController : ControllerBase
    {
        private readonly IPlaceRepo _repo;

        public PlaceController(IPlaceRepo repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetAllPlaces")]
        public async Task<IEnumerable<Place>> GetAllPlaces()
        {
            var places =await _repo.GetAllPlacesAsync();
            if (places != null)
            {
                return places;
            }
            return null;
        }
        [HttpGet]
        [Route("GetPlace/{id}")]
        public async Task<ActionResult<Place>> GetPlace(int id)
        {
            var place = await _repo.GetPlaceAsync(id);
            if (place != null)
                return place;
            return null;
        }
        [HttpPost]
        [Route("AddPlace")]
        public async Task<IActionResult> AddPlace(Place model)
        {
            if (ModelState.IsValid)
            {
                var place = await _repo.AddPlaceAsync(model);
                if (place != null)
                {
                    return Ok(place);
                }
            }
            return BadRequest();
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id == 0)
                return BadRequest();
            var result = await _repo.DeletePlaceAsync(id);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }
        [HttpPut]
        [Route("EditPlace")]
        public async Task<IActionResult> EditPlace(Place model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _repo.EditPlaceAsync(model);
            if (result != null)
            {
                return Ok();
            }
            return BadRequest();
        }
        [HttpPost]
        [Route("Upload")]
        [DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            for (var i = 0; i <= Request.Form.Files.Count; i++)
            {
                var file = Request.Form.Files[i];
                var folderName = Path.Combine("Resources", "Imgaes");
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
            return BadRequest();
        }
        }
}
