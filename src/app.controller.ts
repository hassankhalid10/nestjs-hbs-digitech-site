import { Controller, Get,Post,Body,Req,Res,Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root() {
    return { title: 'Digitech Solution - Home Page' };
  }

  @Get('/aboutus')
  @Render('about')
  aboutus() {
    return { title: 'Digitech Solution - About Page' };
  }

  @Get('/portfolio')
  @Render('portfolio')
  portfolio() {
    return { title: 'Digitech Solution - Portfolio Page' };
  }

  @Get('/portfolio_detail/:id')
  @Render('portfolio_detail')
  portfolio_detail(@Param() params) {
     console.log(params.id);
    return { title: 'Digitech Solution - Portfolio Detail Page' };
  }

  @Get('/contact')
  @Render('contact')
  contact() {
    return { title: 'Digitech Solution - Contact Page' };
  }

  @Post('/contact')
  // @Body() data:data,
  @Render('contact')
  async contactPost(@Req() req, @Res() res) {
   const body = req.body;
   console.log(body)
   return { title: 'Digitech Solution - Contact Page' };
  }
 


}
