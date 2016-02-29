using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BASTAWebApi
{
    public class ProductsController : ApiController
    {
        [HttpGet]
        public string Ping()
        {
            return "Pong";
        }

        [HttpGet]
        public List<Product> List()
        {
            // TODO: Talk to DB :)

            var list = new List<Product>
            {
                new Product {Id = 1, Name = "Foo", Description = "Bar"},
                new Product {Id = 2, Name = "Bar", Description = "Baz"}
            };

            return list;
        } 
    }
}