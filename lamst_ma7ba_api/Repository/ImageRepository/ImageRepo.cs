using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ImageRepository
{
    public class ImageRepo : IImageRepo
    {
        private readonly Context context;

        public ImageRepo( Context context)
        {
            this.context = context;
        }

        public async Task addimage( Image image)
        {
            var time = Convert.ToDateTime(image.DateString);
            var image1 = new Image() { Title = image.Title, Url = image.Url,Date= time,ImageCatId = image.ImageCatId ,ImageCat = context.imageCats.FirstOrDefault(x=> x.Id == image.ImageCatId) , DateString= image.DateString };
            await context.photos.AddAsync(image1);
            await context.SaveChangesAsync();
        }

        public async Task<int> count_images(int catid)
        {
            var count = await context.photos.Where(x => x.ImageCatId == catid).CountAsync();
            return count;
        }

        public async Task deleteimage(int id)
        {
            Image image = await context.photos.FirstOrDefaultAsync(x => x.Id == id);
            context.photos.Remove(image);
           await context.SaveChangesAsync();
        }

        public async Task<IList<Image>> GetImages(int catid , int pageNumber)
        {
            if (pageNumber  == 0)
            {
                pageNumber = 1;
            }
            var images = await context.photos.OrderByDescending(x => x.Date).Where(x => x.ImageCatId == catid).paginage(pageNumber,6).ToListAsync();
            return images;
        }

    }
}
