import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
  return (
    <div className='flex mx-10 p-5 items-center '>
        <div className='col-6 mx-5  '>
            <Card className='hover:bg-sky-200' sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            style={{width:300, height:250}} image="https://th.bing.com/th/id/OIP.gh_n1JqxmlTll9ZC2IFxfQAAAA?pid=ImgDet&rs=1" 
            title="languages"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Welcome to Creative Arena
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Here you can gain informations regarding computer programming by attending the discussions/sessions. You can create your own new discussions.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            
          </CardActions>
        </Card>
        </div>
        <div className="col-6 mx-10 p-10 border border-blue-500 hover:bg-green-200  ">
        <h1 ><b>JOIN THE DISCUSSIONS & LEARN MORE</b></h1> <br />
        <p> We ar giving you an oppurtunity to learn several programming languages & clear your doubts related to it. </p> <br />
        <h2>Register now !! & create your own discussions</h2>
        </div>
        <div className="col-6 mx-10 border border-blue-500 ">
        <Card className='hover:bg-sky-200' sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://th.bing.com/th/id/OIP.82EX5qmr--YhY7QD_jDgJwHaDt?pid=ImgDet&rs=1"
            title="react"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Most Discussed Topic..........
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Join Now</Button>
            
          </CardActions>
        </Card>
        </div>
    </div>
  )
}

export default Cards