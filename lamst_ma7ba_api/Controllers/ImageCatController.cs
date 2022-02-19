using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.ImageCatRepository;
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
    public class ImageCatController : ControllerBase
    {
        private readonly IImageCatRepo imageCatRepo;

        public ImageCatController( IImageCatRepo imageCatRepo)
        {
            this.imageCatRepo = imageCatRepo;
        }
        // GET: api/<ImageCatController>
        [HttpGet]
        public async Task<ActionResult<IList<ImageCat>>> GetAll()
        {
            var imagescat = await imageCatRepo.showImagesCat();
            return Ok(imagescat);
        }

        // GET api/<ImageCatController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ImageCat>> GetImageCat(int id)
        {
            var imagecat =  await imageCatRepo.showimagecat(id);
            return Ok(imagecat);
        }

        // POST api/<ImageCatController>
        [HttpPost]
        public async Task<ActionResult> Post(ImageCat imageCat)
        {
            await imageCatRepo.addimagecat(imageCat);
            return StatusCode(202);

        }

        // PUT api/<ImageCatController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ImageCatController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await imageCatRepo.DeleteImagecat(id);
            return StatusCode(202);
        }
    }
}
