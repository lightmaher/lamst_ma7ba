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
            var image1 = new Image() { Title = image.Title, Url = image.Url,Date=image.Date };
            await context.photos.AddAsync(image1);
            await context.SaveChangesAsync();
        }

        public async Task deleteimage(int id)
        {
            Image image = await context.photos.FirstOrDefaultAsync(x => x.Id == id);
            context.photos.Remove(image);
           await context.SaveChangesAsync();
        }

        public async Task<IList<Image>> GetImages()
        {
            var images = await context.photos.ToListAsync();
            return images;
        }

    }
}
