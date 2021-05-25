using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.ImageRepository;
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
    public class ImageController : ControllerBase
    {
        private readonly IImageRepo iimagerepo;

        public ImageController( IImageRepo iimagerepo)
        {
            this.iimagerepo = iimagerepo;
        }
        // GET: api/<ImageController>
        [HttpGet]
        public async Task<ActionResult<IList<Image>>> GetImages( int catid , int pn)
        {
            var images = await iimagerepo.GetImages(catid , pn);
            return Ok(images);
        }

        // GET api/<ImageController>/count
        [HttpGet("count")]
        public async Task<ActionResult<int>> count(int catid)
        {
            var count = await iimagerepo.count_images(catid);
            return Ok(count);
        }

        // POST api/<ImageController>
        [HttpPost]
        public async Task<ActionResult> PostImage(Image image)
        {
            await iimagerepo.addimage(image);
            return StatusCode(202);
        }
        // DELETE api/<ImageController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await iimagerepo.deleteimage(id);
            return StatusCode(202);
        }
    }
}
