using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;

        // Inject the database in the class
        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        // Get All products
        [HttpGet]
        public async Task<ActionResult<List<Product>>>GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // Get a single product
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);
        }
    }
}