import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ItemPage from './Pages/ItemPage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ShoppingBag from './Pages/ShoppingBag';
import Nav from './Components/Nav/Nav';
import './Components/FontawesomeIcons';
import './App.css';
import Footer from './Components/Footer';



function App() {
  const itemCardsData = [
    {   
      id: 1,
      name: `Air Jordan 1 Low`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/39972783-bf85-4d26-8b76-0ddd2187237a/air-jordan-1-low-shoe-QWKv20.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/572e01a9-866c-4bb1-ab82-e0c6e682434d/air-jordan-1-low-shoe-QWKv20.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/941e8f1c-3872-44c6-b5f4-9d601626bb52/air-jordan-1-low-shoe-QWKv20.png'],
      price: 99.95,
      gender: 'unisex',
      desc: `Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.`,
      collection: 'jordan',
      featured: true,
      category: 'lifestyle'
    },
    {   
      id: 2,
      name: 'Air Max 90 SE',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/90972e76-385b-4706-86c5-0c864d7c5ffe/air-max-90-se-older-shoe-0fsnS7.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/57ac5388-d835-4413-a5a2-6a7072bdbd1f/air-max-90-se-older-shoe-0fsnS7.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/35e80328-6652-4cd4-82db-33aa6cf7241c/air-max-90-se-older-shoe-0fsnS7.png'],
      price: 134.95,
      gender: 'unisex',
      collection: 'max',
      featured: true,
      category: 'lifestyle'
    },
    {   
      id: 3,
      name: 'Cosmic Unity (Team)',
      img: ['https://www.prodirectbasketball.com/productimages/V3_1_Gallery_1/246665_Gallery_1_0947555.jpg?imwidth=768', 'https://www.prodirectbasketball.com/productimages/V3_1_Main/246665_Main_Thumb_0947553.jpg?imwidth=768', 'https://www.prodirectbasketball.com/productimages/V3_1_Gallery_4/246665_Gallery_4_0947559.jpg?imwidth=768'],
      price: 134.95,
      desc: 'Making more performance, with less impact, the Nike Cosmic Unity Team is trash transformed, featuring high end performance, with at least 25% recycled material by weight.',
      gender: 'men',
      collection: '',
      featured: true,
      category: 'basketball'
    },
    {
      id: 8,
      name: 'Jordan Point Lane',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0163ca4a-abe8-4657-bbe5-b62444a03a65/jordan-point-lane-shoes-53LZr6.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/55be4d42-03fe-40e4-8349-d834038a78e4/jordan-point-lane-shoes-53LZr6.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/26ced931-ab3d-4a63-b351-71fb659e2273/jordan-point-lane-shoes-53LZr6.png'],
      price: 124.95,
      desc: `The Jordan Point Lane mixes elements from game shoes MJ wore during 3 of his most memorable seasons.Named after his Chicago address, this mash-up pulls in bits and pieces from the AJ3, AJ6 and AJ11 to create a shoe that's inspired by greatness and uncompromising in its comfort.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {   
      id: 4,
      name: 'Giannis Immortality',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0e561b97-7a97-4fcf-bbda-a676cda6f4eb/giannis-immortality-basketball-shoes-zGxPT5.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/61f76a33-25a9-452a-b445-bbdf17110f3a/giannis-immortality-basketball-shoes-zGxPT5.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/420405e2-e855-4f1f-9e9d-21f5d4bb0d57/giannis-immortality-basketball-shoes-zGxPT5.png'],
      price: 72.95,
      gender: 'men',
      collection: '',
      desc: `Bring some serious reach with the Nike Giannis Immortality 'Force Field', inspired by the signature play and tremendous range of Giannis Antetokounmpo and built to get him where he needs to be, promoting side-to-side Euro steps.`,
      featured: true,
      category: 'basketball'  
    },
    {   
      id: 5,
      name: 'Nike Mercurial Superfly VIII Elite CR7 FG',
      img: ['https://www.prodirectsoccer.com/ProductImages/Gallery_1/244130_Gallery_1_0929202.jpg', 'https://www.prodirectsoccer.com/ProductImages/Gallery_5/244130_Gallery_5_0929207.jpg', 'https://www.prodirectsoccer.com/ProductImages/Gallery_4/244130_Gallery_4_0929206.jpg'],
      desc: 'Chile Red/Black/Ghost/Total Orange',
      price: 244.95,
      gender: 'unisex',
      collection: '',
      featured: true,
      category: 'football'
    },
    {   
      id: 6,
      name: 'Free Run 5.0',
      img: ['https://www.prodirectrunning.com/ProductImages/Gallery_1/243747_Gallery_1_0928817.jpg', 'https://www.prodirectrunning.com/ProductImages/Main/243747_Main_Thumb_0928816.jpg', 'https://www.prodirectrunning.com/ProductImages/Gallery_4/243747_Gallery_4_0928820.jpg'],
      price: 99.95,
      desc: 'Off White/Grey Fog-White',
      gender: 'unisex',
      featured: true,
      category: 'running'
    },
    {
      id: 7,
      name: 'Nike Air Max 90',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/65d02ab6-19ed-4635-81f2-569be3333ae4/air-max-90-shoes-P5Pf0w.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/63d68b37-1663-4b26-b7dd-4c32822c5175/air-max-90-shoes-P5Pf0w.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f0eaa917-6247-441e-966e-cdd5496889d8/air-max-90-shoes-P5Pf0w.png'],
      price: 124.95,
      desc: 'Nothing as fly, nothing as comfortable, nothing as proven—the Nike Air Max 90 stays true to its roots with the iconic Waffle sole, stitched overlays and classic TPU accents.Fresh materials update the design while Max Air cushioning adds comfort to your journey.',
      gender: 'men',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 18,
      name: 'Nike React Vision',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1c27322e-d8fc-4c42-8ff7-c9f711dc93a5/react-vision-shoes-5X0Gns.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/69d8a1d3-8bf8-4c0e-adb8-6ca22db284d6/react-vision-shoes-5X0Gns.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6d847aec-4d6a-421e-9d0e-a9a16461cd50/react-vision-shoes-5X0Gns.png'],
      price: 114.95,
      desc: `This one's a vision of comfort.Layered textures, unique shapes and vivid colours combine in a design influenced by the exaggerated worlds found in our dreams. React foam and a soft tongue keep it smooth.      `,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 9,
      name: `Nike Air Force 1 '07`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-lKPQ6q.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1241c085-a703-49dd-8a84-5694d5fd8feb/air-force-1-07-shoe-lKPQ6q.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/894df3e6-1f5b-4a0a-8d9d-dc5112833d0c/air-force-1-07-shoe-lKPQ6q.png'],
      price: 99.95,
      desc: `The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.      `,
      gender: 'men',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 10,
      name: 'Nike Air Zoom G.T.Run',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c9d1b68b-b2ca-4112-982f-00514a9913cb/air-zoom-gtrun-basketball-shoes-8Dd9Pp.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/be0fba2f-8542-4293-8490-6d9dcc583a2d/air-zoom-gtrun-basketball-shoes-8Dd9Pp.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1f683656-4d30-4fed-abb8-e62bff721881/air-zoom-gtrun-basketball-shoes-8Dd9Pp.png'],
      price: 164.95,
      desc: `Feel fresh.Hustle hard.The Nike Air Zoom G.T.Run is designed for players who can do it all on court and need their shoes to keep up.Its cushioning system is stacked with 2 Zoom Air units plus 2 layers of Nike React foam.Ultralight and extra supportive in key areas, it provides a snug, consistent fit and a responsive feel to help you get the most out of your energy and outlast the competition.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 11,
      name: `Nike Air Force 1 '07`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoe-lKPQ6q.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7816bb7c-2bb9-4eac-b552-8d0573a0e9fc/air-force-1-07-shoe-lKPQ6q.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/15688a4c-6914-42c9-8912-7bce807d481c/air-force-1-07-shoe-lKPQ6q.png'],
      price: 99.95,
      desc: `The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.      `,
      gender: 'men',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 12,
      name: 'Zoom Freak 3',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a11a8441-433f-420e-b77a-66314b3a36e4/zoom-freak-3-basketball-shoes-MZpJZF.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/73a1bac3-bd69-4faf-8172-f8bb30d1c364/zoom-freak-3-basketball-shoes-MZpJZF.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bdd852a2-3a51-4559-a885-30df2a8b5193/zoom-freak-3-basketball-shoes-MZpJZF.png'],
      price: 112.95,
      desc: `Giannis is an athlete of freakish power and incredible range.His ability to play any position make him difficult to guard and nearly impossible to stop.The Zoom Freak 3 helps Giannis create space with his massive strides and misdirecting Euro-step.The moulded midfoot strap and external overlay provide side-to-side stability when he's powering to the rim, while the multi-directional traction helps him stay in control.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 13,
      name: 'LeBron 18 Low',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9a05e0dc-b250-41aa-81b1-a47b9030d9c1/lebron-18-low-basketball-shoe-gjbhB8.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ac14cc87-7c2e-4c39-b94f-83ef5b808903/lebron-18-low-basketball-shoe-gjbhB8.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d5f82ddd-56f3-414c-b78b-fdc7a6555707/lebron-18-low-basketball-shoe-gjbhB8.png'],
      price: 114.95,
      desc: `LeBron's high-performance engine needs a light yet strong frame to help harness and direct his force. The LeBron 18 Low brings back the 17's cushioning system to provide an optimal balance of comfort, impact cushioning and responsiveness. The upper combines a mix of lightweight materials, no-sew overlays and a structured heel to provide full-foot containment without sacrificing ankle mobility.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 14,
      name: `Air Jordan 35 'DNA'`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9822bd64-2744-433f-a5c7-0a5dd36863a1/air-jordan-xxxv-dna-basketball-shoes-vKMDjw.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aa52cd32-f7b6-46d4-bf29-a97f6bdba6c4/air-jordan-xxxv-dna-basketball-shoes-vKMDjw.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b8eaaf8f-36f9-426d-839b-abfad4332c92/air-jordan-xxxv-dna-basketball-shoes-vKMDjw.png'],
      price: 162.95,
      desc: `Since 1985, the DNA of Jordan Brand has always been a mystery of defiance and greatness.The traits that shape the brand's identity are innate to those who fly together in the Jordan family.Just like those who represent Jordan, over 35 years of Air Jordan ingenuity have shaped a legacy that's still being written.Refreshing the iconic fire red colourway of the Jordan 5, the Air Jordan XXXV 'DNA' is a nod to the fiery fighter plane ethos and intensity of the '90s dovetailed with the innovation of future history.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'jordan'
    },
    {
      id: 15,
      name: 'PG 5',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d19e91a1-c466-4e24-8636-b3cc701d4165/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cb970748-11e0-4dce-aa82-0305019d3f4e/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f7f22eb2-c228-48b4-b3a6-f01abddb0653/pg-5-basketball-shoe-GXgl87.png'],
      price: 104.95,
      desc: `Paul George has an effortlessly smooth, reliably steady game.He takes his time, but he's always well-positioned to make the extra pass, cut through the lane or nail a pull-up jumper.The PG 5 combines the agile low-top profile Paul likes with flexible Nike Air Strobel cushioning.The full-length Air unit is stitched directly to the upper, bringing the plush, bouncy cushioning right up under the foot—perfect for keeping PG feeling like he's moving on clouds.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 16,
      name: 'PG 5',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/19de1ea3-7a23-4f45-9901-2074ec049f1f/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f28eb087-8531-4233-b5f0-544ef017330c/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/09577d85-f087-4ef6-9e2d-c60979966706/pg-5-basketball-shoe-GXgl87.png'],
      price: 104.95,
      desc: `Paul George has an effortlessly smooth, reliably steady game.He takes his time, but he's always well-positioned to make the extra pass, cut through the lane or nail a pull-up jumper.The PG 5 combines the agile low-top profile Paul likes with flexible Nike Air Strobel cushioning.The full-length Air unit is stitched directly to the upper, bringing the plush, bouncy cushioning right up under the foot—perfect for keeping PG feeling like he's moving on clouds.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 17,
      name: 'PG 5',
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/43e1d9c5-717d-4436-b4fa-04b54329c0f9/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7bc375b4-40ac-4221-8324-b8e0bec56d7c/pg-5-basketball-shoe-GXgl87.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a0bec9c7-70dd-4af6-b912-8c8f053dbeab/pg-5-basketball-shoe-GXgl87.png'],
      price: 104.95,
      desc: `Paul George has an effortlessly smooth, reliably steady game.He takes his time, but he's always well-positioned to make the extra pass, cut through the lane or nail a pull-up jumper.The PG 5 combines the agile low-top profile Paul likes with flexible Nike Air Strobel cushioning.The full-length Air unit is stitched directly to the upper, bringing the plush, bouncy cushioning right up under the foot—perfect for keeping PG feeling like he's moving on clouds.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'basketball'
    },
    {
      id: 19,
      name: `Nike Air Force 1 '07`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/15b85bdb-aa12-4060-83d0-5163d11b314e/air-force-1-07-shoe-pXTXQ8.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/dce93a1d-ebcb-4300-b8cf-f71da0820ea1/air-force-1-07-shoe-pXTXQ8.png'],
      price: 99.95,
      desc: `The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.`,
      gender: 'unisex',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 20,
      name: `Nike Air Force 1 Low Unlocked`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f54a3d88-5657-402b-96dd-2794d1f2639a/custom-nike-air-force-1-unlocked-by-you.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/caee783f-3631-44e9-a9d0-1a3b1e67aeda/custom-nike-air-force-1-unlocked-by-you.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/db14db63-2d18-4558-b446-d91035d8107d/custom-nike-air-force-1-unlocked-by-you.png'],
      price: 144.95,
      desc: `In 1971, the legend of the Swoosh was born when it was stitched to a pair of football boots, drawing inspiration from the Greek goddess Nike.Embodying the spirit of sport and its power to unify, the Swoosh symbolises progress from the tracks to the fields to the streets.Celebrate this icon your way with what may be our greatest shoe of all time: the Nike Air Force 1 Unlocked By You.`,
      gender: 'unisex',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 21,
      name: `Nike Air Force 1 Shadow`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6a514ca0-57b9-4dcf-9160-0ca76562eb3e/air-force-1-shadow-shoes-38vS5x.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/449c7e98-90f3-4e65-9d22-7fd9fc5badd2/air-force-1-shadow-shoes-38vS5x.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5d7908df-cf64-4b96-9ee6-f2e921d0e366/air-force-1-shadow-shoes-38vS5x.png'],
      price: 109.95,
      desc: `The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design.Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold, new look.`,
      gender: 'women',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 22,
      name: `Nike Air Force 1 Shadow`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8c6ad0c9-25f3-4f1e-80b3-3f59ed2b23fc/air-force-1-shadow-shoes-gffB8t.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0fb7ca8a-17ca-4dc0-8e83-1b5613629357/air-force-1-shadow-shoes-gffB8t.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/39e54128-bcdb-4f3d-9b15-2395912c8f13/air-force-1-shadow-shoes-gffB8t.png'],
      price: 87.97,
      desc: `Inspired by the incredible force of your spirit, the Nike Air Force 1 Shadow brings 2 times the dimension and character to your kick game.Layered graphics, an exaggerated midsole, and hits of soft pink and Electric Green elevate classic AF-1 DNA for a bold look.`,
      gender: 'women',
      collection: 'force',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 23,
      name: `Air Jordan 11 CMFT Low`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/361aa02f-e286-40b2-9182-39db7a194b4c/air-jordan-11-cmft-low-shoes-QpFwmh.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5e33ef40-7036-4e58-a59c-1cedf7685251/air-jordan-11-cmft-low-shoes-QpFwmh.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/047a751e-9063-4fd5-b3e0-5d6c903acedb/air-jordan-11-cmft-low-shoes-QpFwmh.png'],
      price: 112.95,
      desc: `The Air Jordan 11 CMFT Low looks to the future of flight with comfort in mind.The soft leather toe cap and mudguard and webbing lace loops replicate distinct features from the original AJ11.Soft, smooth Cushlon foam and Zoom Air cushioning make every step comfortable.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 24,
      name: `Jordan Stay Loyal`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d91306d0-a6f4-4def-95d3-0d30e22b4c1a/jordan-stay-loyal-shoes-jDJnlP.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8dfa601b-8e5f-4d9b-8a0f-c92671da1b4e/jordan-stay-loyal-shoes-jDJnlP.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2e17d336-e755-4a15-8c98-ff27f2356690/jordan-stay-loyal-shoes-jDJnlP.png'],
      price: 99.95,
      desc: `Straight from our past and into the future.The Jordan Stay Loyal takes cues from the classic Air Jordan 12 to create a shoe that's fresh yet familiar.Inspired by the 12's durability, it features burly leather overlays and rubber herringbone traction that wraps up the toe, sides and heel.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 25,
      name: `Jordan Stay Loyal`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5f665e9b-5b4e-4e74-8fe9-51b5320835ae/jordan-stay-loyal-shoes-jDJnlP.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/023e6aa6-c54f-4d4e-a893-08859b3f9214/jordan-stay-loyal-shoes-jDJnlP.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/177aee89-33c3-44b0-98fa-e8da6ddec7d4/jordan-stay-loyal-shoes-jDJnlP.png'],
      price: 99.95,
      desc: `Straight from our past and into the future.The Jordan Stay Loyal takes cues from the classic Air Jordan 12 to create a shoe that's fresh yet familiar.Inspired by the 12's durability, it features burly leather overlays and rubber herringbone traction that wraps up the toe, sides and heel.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 26,
      name: `Air Jordan XXXVI 'First Light'`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/83f1cbdb-5c13-4eb4-915e-5b33c809c408/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6f75065e-9458-4e0a-a3c2-916790f4bf54/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png'],
      price: 167.95,
      desc: `Since 1985, Jordan Brand has always done things that have never been seen before.Almost forty years later, Jordan continues to bring new light to the game with international athletes that are redefining the blueprint once again.Beaming with talent, it's about the shine within that makes the new faces of the game radiant on the court.Drawing inspiration from ultraviolet rays, the Air Jordan XXXVI 'First Light' celebrates the future of Jordan—the ones who will brighten the way for the next generation of global superstars all across the world.`,
      gender: 'men',
      collection: 'jordan',
      featured: false,
      category: 'basketball'
    },
    {
      id: 27,
      name: `Air Jordan 1 Mid`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoes-scZZ99.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/98065153-663f-41e3-9424-a70bc08f989d/air-jordan-1-mid-shoes-scZZ99.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1f70fb23-c76e-407b-90e8-ec7e43e6356c/air-jordan-1-mid-shoes-scZZ99.png'],
      price: 99.95,
      desc: `The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness.Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.`,
      gender: 'unisex',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 28,
      name: `Air Jordan 1 Mid`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb28a2df-c4a7-4c4e-a31e-10c00d6867d9/air-jordan-1-mid-shoes-scZZ99.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0d9e485f-bc09-4686-a53b-87afd15968ee/air-jordan-1-mid-shoes-scZZ99.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d5ec220c-a36e-45d7-ad75-47af6ccfb261/air-jordan-1-mid-shoes-scZZ99.png'],
      price: 99.95,
      desc: `The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness.Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.`,
      gender: 'unisex',
      collection: 'jordan',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 29,
      name: `Nike Air Zoom Alphafly NEXT%`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0832145e-7077-419d-a1fd-ef8d8a711dcf/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ddac3094-6f97-47f0-931d-8563af8fa7be/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png'],
      price: 259.95,
      desc: `Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT%.Responsive foam is combined with 2 Zoom Air units to push your running game forwards for your next marathon or road race.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 30,
      name: `Nike React Infinity Run Flyknit 2`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c8a6efcf-dfd1-4e50-a5de-9cae9044bf57/react-infinity-run-flyknit-2-road-running-shoes-2GTTcm.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/09fbf177-2dd0-47b9-98fc-5b4f8196ace3/react-infinity-run-flyknit-2-road-running-shoes-2GTTcm.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/18ec7db7-8ddc-4561-a03d-63243a8a95cb/react-infinity-run-flyknit-2-road-running-shoes-2GTTcm.png'],
      price: 144.95,
      desc: `The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 31,
      name: `Nike Pegasus Trail 3`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/609263c1-2c57-4646-991e-3dc0195f2b1e/pegasus-trail-3-trail-running-shoes-3BMMJx.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9e794e25-fdfd-4411-9fef-0c35f0f94931/pegasus-trail-3-trail-running-shoes-3BMMJx.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/de9bcdbc-d25d-4343-b71e-8633345fafa9/pegasus-trail-3-trail-running-shoes-3BMMJx.png'],
      price: 114.95,
      desc: `Find your wings with an off-road run.The Nike Pegasus Trail 3 has the same comfort you love, with a design that nods to the classic Pegasus look.Nike React foam delivers responsive cushioning while tough traction helps you stay moving through rocky terrain.More support around the midfoot helps you feel secure on your journey.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 32,
      name: `Nike Air Zoom Tempo NEXT% FlyEase`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/84972048-6389-46c6-bda3-e01fa6eef4df/air-zoom-tempo-next-flyease-running-shoe-BcRqTJ.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/11f842ae-c011-48a9-bfc6-62bb72b24575/air-zoom-tempo-next-flyease-running-shoe-BcRqTJ.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f9c3ce95-7c74-47f2-8d9d-a87af6444b0b/air-zoom-tempo-next-flyease-running-shoe-BcRqTJ.png'],
      price: 179.95,
      desc: `The ultra-responsive Nike Air Zoom Tempo NEXT% FlyEase is designed to help you get the most from your training runs, so you can go confidently into your next (or first) race. It has a step-in entry and an internal lacing mechanism you operate with one hand. Pull one loop to tighten, another to release.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 33,
      name: `Nike Quest 4`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/140bedcd-74e0-4d60-aeb1-67b354250f59/quest-4-road-running-shoes-2x6N2f.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e366c1a2-7634-4a5a-8dfd-1fa7661d777d/quest-4-road-running-shoes-2x6N2f.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9d7fb8cf-8d58-4084-84f0-ccccc0d9b1ed/quest-4-road-running-shoes-2x6N2f.png'],
      price: 69.95,
      desc: `The pursuit of speed continues with the Nike Quest 4 Premium.Take on the streets with higher foam heights and cushioned comfort that combine with a lightweight upper to offer secure support.Intuitive details make it a staple for the everyday runner.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 34,
      name: `Nike ZoomX Vaporfly Next% 2`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/328c107b-0189-4707-8c80-fdd7b34af8ae/zoomx-vaporfly-next-2-road-racing-shoes-PNrPZp.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e770329b-0cea-487d-b654-0849be6c0e55/zoomx-vaporfly-next-2-road-racing-shoes-PNrPZp.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f9a504e9-c0f7-40e2-a194-de8e1a9868b2/zoomx-vaporfly-next-2-road-racing-shoes-PNrPZp.png'],
      price: 224.95,
      desc: `Continue the next evolution of speed with a racing shoe made to help chase new goals and records.The Nike ZoomX Vaporfly Next% 2 builds on the model racers everywhere love.It helps improve comfort and breathability with a redesigned upper.From a 10K to a marathon, the 2 still has the responsive cushioning and secure support to push you towards your personal best.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 35,
      name: `Nike Air Zoom Pegasus 38`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b289b473-d847-4ac3-8628-276ad98208af/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/51dddcd1-0340-466d-9fcb-9b07fe47cd3e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png'],
      price: 112.95,
      desc: `Bring some smiles to your miles as you run the streets of Tokyo.The Pegasus 38 is a tried-and-true classic that keeps you bouncy and comfortable, bringing a little extra joy to your longer runs.Bold, geometric shapes celebrate the cityscape as you stride into the distance.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 36,
      name: `Nike Air Zoom Terra Kiger 7`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/74d643af-8231-4576-ae67-50432da73516/air-zoom-terra-kiger-7-trail-running-shoes-NSXcRr.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e3caa80f-87d2-4247-877f-9b6820eea07e/air-zoom-terra-kiger-7-trail-running-shoes-NSXcRr.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d342cdec-7564-44f3-8b94-8ada5d43ec14/air-zoom-terra-kiger-7-trail-running-shoes-NSXcRr.png'],
      price: 124.95,
      desc: `Run the trail in a super-responsive running shoe.Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths.Updated traction lugs provide stability for your downhill miles.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'running'
    },
    {
      id: 37,
      name: `Nike Mercurial Vapor 14 Elite`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e360b620-a358-422d-88f0-cf9d8625dc29/custom-nike-mercurial-vapor-14-elite-by-you.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e4d67fbd-8667-4ee2-85cc-09683c672e81/custom-nike-mercurial-vapor-14-elite-by-you.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/124deb49-34c0-46fd-86e2-c4c54c01b77e/custom-nike-mercurial-vapor-14-elite-by-you.png'],
      price: 249.95,
      desc: `Every layer of the Nike Mercurial Vapor 14 Elite By You was built to enhance your game, bringing together the essential components for speed, optimal touch and dependable traction. Highlight the technological mastery of your boots and your moves with a new design console that gives you even more control over your look on the pitch.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 38,
      name: `Nike Phantom GT2 Elite AG-PRO`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ad90a8f0-e40e-4f36-9fc4-beb9e2641b3a/phantom-gt2-elite-ag-pro-football-boot-LN4BvB.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/32ea0a6a-89ed-454c-80b1-49b2be1cf07c/phantom-gt2-elite-ag-pro-football-boot-LN4BvB.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6098ee27-c87b-4c96-878b-20f856a8cbcb/phantom-gt2-elite-ag-pro-football-boot-LN4BvB.png'],
      price: 244.95,
      desc: ``,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 39,
      name: `Nike Mercurial Superfly 8 Elite FG`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b459bc37-7dda-4b85-8875-d8104f97c5f6/mercurial-superfly-8-elite-fg-football-boots-5SQLt5.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fd8d1070-211f-4dea-9d2c-afc6b6b8cf18/mercurial-superfly-8-elite-fg-football-boots-5SQLt5.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/210e9c2b-6523-4d37-8d04-50a9feac070e/mercurial-superfly-8-elite-fg-football-boots-5SQLt5.png'],
      price: 244.95,
      desc: `The Nike Mercurial Superfly 8 Elite FG features a new look with specialised components to let you play your fastest from start to finish.A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 40,
      name: `Nike Phantom GT2 Dynamic Fit Elite FG`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e8c7f544-60b1-4a34-b6b5-2d1696d694b1/phantom-gt2-dynamic-fit-elite-fg-football-boot-tSzFpR.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/298f2bcb-6c77-4ff1-8dbf-2b5539cbd509/phantom-gt2-dynamic-fit-elite-fg-football-boot-tSzFpR.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/40db46c9-e46e-457e-8c53-be3fedb5c2e6/phantom-gt2-dynamic-fit-elite-fg-football-boot-tSzFpR.png'],
      price: 244.95,
      desc: `Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball.Off-centre lacing provides a clean strike zone for skilful dribbling, passing and shooting.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 41,
      name: `Nike Tiempo Legend 9 Elite SG-Pro AC`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6dde5485-0ad1-49bb-9d7c-66758c397c70/tiempo-legend-9-elite-sg-pro-ac-football-boot-QLpFXq.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8d5de5e2-d469-437b-b59f-66bc7d094b10/tiempo-legend-9-elite-sg-pro-ac-football-boot-QLpFXq.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/59ccd29b-fe83-4cf6-9003-5e0a526e6d8a/tiempo-legend-9-elite-sg-pro-ac-football-boot-QLpFXq.png'],
      price: 214.95,
      desc: `1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Elite SG-Pro AC lets you go on the attack with a low-profile design that's reinvented for attackers.The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting.Screw-in metal studs power through wet pitches, and Anti-Clog traction on the soleplates helps prevent mud from sticking.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 42,
      name: `Nike Mercurial Vapor 14 Academy TF`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ec18b039-d843-4f8e-bd3d-01f32fe7949c/mercurial-vapor-14-academy-tf-football-shoe-M5LPWw.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e594f765-67a4-46a4-85a4-6c7279f38906/mercurial-vapor-14-academy-tf-football-shoe-M5LPWw.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/04e782b1-cc9b-4470-b74a-a3ea3208999d/mercurial-vapor-14-academy-tf-football-shoe-M5LPWw.png'],
      price: 69.95,
      desc: `The Nike Mercurial Vapor 14 Academy TF is a grippy design with multi-directional traction that helps set you up for super-charged speed.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 43,
      name: `Nike Mercurial Superfly 8 Academy By You`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f5eed781-4307-40bb-9fa9-0b8175af69a7/custom-nike-mercurial-superfly-8-academy-by-you.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/06641da9-54fb-41bd-a251-ab1f6198156d/custom-nike-mercurial-superfly-8-academy-by-you.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9d2c4c1f-3e18-4d24-8a0d-b6dbcf0b5f7f/custom-nike-mercurial-superfly-8-academy-by-you.png'],
      price: 109.95,
      desc: `Show your team pride in a brand-new Nike Mercurial Superfly 8 Academy By You. Pop your design with an array of colours that reflect your power, speed and agility. Plate options let you pick the traction that's right for your game and a national flag option lets you rep your favourite squad.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 44,
      name: `Custom Firm Ground Football Boot`,
      img: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e8849966-f66c-47a7-b647-3a01ceda0389/custom-nike-phantom-gt-elite-by-you.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e22d5535-5971-4869-a20e-09e5db05bbbb/custom-nike-phantom-gt-elite-by-you.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2100de37-3897-4616-a384-106307f311d4/custom-nike-phantom-gt-elite-by-you.png'],
      price: 249.95,
      desc: `Take our most innovative boot to the next level in the Nike Phantom GT Elite By You. After analysing thousands of football-specific moves, a tacky material was added to the Flyknit construction to give you better touch and control of the ball. Add a Dynamic Fit collar for a feel with even more control or go with a low-cut boot; then choose the traction that makes sense for your game.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'football'
    },
    {
      id: 45,
      name: `Nike Metcon 7`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/926f1ff7-436d-4af7-8a48-5e25ccee3fd1/metcon-7-training-shoes-CHLK3h.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2401a446-c10e-46a5-a00c-ff2ba79cf4c2/metcon-7-training-shoes-CHLK3h.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/628f5d2d-3152-49ab-a267-02b4137fbb75/metcon-7-training-shoes-CHLK3h.png'],
      price: 114.95,
      desc: `The Nike Metcon 7 is the gold standard for weight training—even tougher and more stable than previous versions.We've also added React foam that ups the comfort to keep you ready for high-intensity cardio.Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 46,
      name: `Nike Metcon 7 AMP`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b40444ce-f06d-497e-86c4-f57050179219/metcon-7-amp-training-shoes-zrRV5L.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b5e43c04-5b0b-42ba-9655-efc2dfe4510f/metcon-7-amp-training-shoes-zrRV5L.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/50caea62-0d29-486e-ae76-e65f67b933bf/metcon-7-amp-training-shoes-zrRV5L.png'],
      price: 124.95,
      desc: `Tougher and more stable than previous versions, meet the gold standard for weight training.We've added React foam that ups the comfort to keep you ready for high-intensity cardio.Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PR.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 47,
      name: `Nike Air Zoom SuperRep 2`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cb86e6ad-ba38-4df1-af4c-43eef4b63a29/air-zoom-superrep-2-hiit-class-shoe-6Qj1Xc.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5b4f54fb-3403-46f4-a5f7-bac9bc5c27c0/air-zoom-superrep-2-hiit-class-shoe-6Qj1Xc.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5efa4227-9404-41a8-a91e-ad7bc1d24d3e/air-zoom-superrep-2-hiit-class-shoe-6Qj1Xc.png'],
      price: 112.95,
      desc: `The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT, sprints and other fast-paced exercise.Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep.A roomier design around the toes lets you get the perfect fit.`,
      gender: 'men',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 48,
      name: `Nike Metcon 7 X`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/224c1576-1a7c-4a84-8800-dacd9ee4ae16/metcon-7-training-shoe-LSwmqj.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d5cef45c-6190-44d8-a83d-6c78b4a41362/metcon-7-training-shoe-LSwmqj.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/daa6272a-2479-44dd-b77f-933e55f01d19/metcon-7-training-shoe-LSwmqj.png'],
      price: 114.95,
      desc: `The Nike Metcon 7 X is the gold standard for weight training—even tougher and more stable than previous versions. We've also added React foam that ups the comfort to keep you ready for high-intensity cardio. Plus, a tab locks down your laces so you can forget about them coming untied when you're focused on your next PB.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 49,
      name: `Nike Air Zoom SuperRep 2`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/369ba5db-f399-4ff5-898c-5f22c8f42b2c/air-zoom-superrep-2-hiit-class-shoes-zq36cl.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/397f2722-07db-492f-8275-75fbde973ea2/air-zoom-superrep-2-hiit-class-shoes-zq36cl.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1d77d04e-1eb6-4e25-801f-a0da2f991ffd/air-zoom-superrep-2-hiit-class-shoes-zq36cl.png'],
      price: 109.95,
      desc: `The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT and other fast-paced exercise.Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep.`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 50,
      name: `Nike Free Metcon 4`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d08679a-1337-447a-9d18-daaf9f981976/free-metcon-4-training-shoes-4HNPks.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f6359849-60f2-4b29-b97c-afed5a8209df/free-metcon-4-training-shoes-4HNPks.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/13cfed7a-b12c-48e6-b616-5c827bba6b26/free-metcon-4-training-shoes-4HNPks.png'],
      price: 109.95,
      desc: `The Nike Free Metcon 4 combines flexibility with stability to help you get the most out of your training programme.Updated "chain-link" mesh cools and flexes as you speed through agility drills, while support at the midfoot and heel braces you for your heaviest sets in the weight room`,
      gender: 'women',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 51,
      name: `Nike Free Metcon 4`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2929f543-6a85-4d2c-82bc-c2190895572c/free-metcon-4-training-shoe-h5T8XX.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/001ea66a-9e4f-4c23-b042-339e98757e04/free-metcon-4-training-shoe-h5T8XX.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f934e27c-47ed-45e1-8ae4-03e64a8fd358/free-metcon-4-training-shoe-h5T8XX.png'],
      price: 109.95,
      desc: `The Nike Free Metcon 4 combines flexibility with stability to help you get the most out of your training programme. Updated "chain-link" mesh cools and flexes as you speed through agility drills, while support at the midfoot and heel braces you for your heaviest sets in the weight room.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 52,
      name: `Nike Metcon 7 FlyEase`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb61dee6-c3f9-4a5c-8d73-d35117e43bf7/metcon-7-flyease-training-shoes-RKGv1m.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ead6938e-1bf8-4c7f-906b-2123c649df4d/metcon-7-flyease-training-shoes-RKGv1m.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8766355-068d-4dcc-8cb9-7854dc026e84/metcon-7-flyease-training-shoes-RKGv1m.png'],
      price: 114.95,
      desc: `The Nike Metcon 7 FlyEase refines stability and durability to stand up to the push and pull of serious strength training.Lightweight, responsive cushioning dials up the comfort during workouts that include lifting, high-intensity intervals—even sprints and short runs.The training shoe has a collapsible heel that lets you step in without using your hands, then it snaps back up to secure your foot.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 53,
      name: `Nike Savaleos`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8aa54e1c-e6f3-4d85-92dc-7b99001d3e22/savaleos-weightlifting-shoe-N1nW3Z.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2fbfa607-1e52-4f5e-966c-3ce279cbcd9a/savaleos-weightlifting-shoe-N1nW3Z.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e7788326-d1e7-417a-940a-dc9b65020c1b/savaleos-weightlifting-shoe-N1nW3Z.png'],
      price: 109.95,
      desc: `The Nike Savaleos straps your foot down to a flat, wide base to keep you feeling stable and secure when you're up against serious weight. The rigid midsole has a lift at the heel for peak power transfer from the ground, to help support your most explosive sets.`,
      gender: 'unisex',
      collection: '',
      featured: false,
      category: 'training'
    },
    {
      id: 54,
      name: `Nike Air Max 97`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fjfip8ga1ep22vhxdcew/air-max-97-shoe-nsRddC.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zpgc2tnca6kijplj84xx/air-max-97-shoe-nsRddC.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/u4vsjywwphq6y6xtismt/air-max-97-shoe-nsRddC.png'],
      price: 164.95,
      desc: `Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.`,
      gender: 'men',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 55,
      name: `Nike Air Max 97`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-shoes-nsRddC.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/oihgcfk3ykelvgmwwrqu/air-max-97-shoes-nsRddC.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/n3hfzt89anzujlouyrzy/air-max-97-shoes-nsRddC.png'],
      price: 164.95,
      desc: `Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.`,
      gender: 'men',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 56,
      name: `Nike Air Max Plus`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/erzfadfpnzgkxt0gn2ya/air-max-plus-shoe-07mFHd.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/lggqeeldzz7qlodfybfp/air-max-plus-shoe-07mFHd.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/jxrtdnfgiljr9sjy8cji/air-max-plus-shoe-07mFHd.png'],
      price: 154.95,
      desc: `Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.      `,
      gender: 'men',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 57,
      name: `Nike Air Max Plus`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/air-max-plus-shoe-07mFHd.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cugwkuboomfeksnwtpy1/air-max-plus-shoe-07mFHd.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qp3nmrlrofugbgqajn82/air-max-plus-shoe-07mFHd.png'],
      price: 154.95,
      desc: `Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.      `,
      gender: 'men',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 59,
      name: `Nike Air Max Plus`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ebdcaf2-7fd5-4896-a69d-ea29479ee476/air-max-plus-shoes-zWrpcz.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b3c9a446-f2e0-43a2-b68e-8320be56da14/air-max-plus-shoes-zWrpcz.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ff7a43b0-46bd-4221-9a1e-52fafa5946d7/air-max-plus-shoes-zWrpcz.png'],
      price: 154.95,
      desc: `Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, TPU accents and airy mesh on the upper, it celebrates defiant style.      `,
      gender: 'women',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 59,
      name: `Nike Air Max SC`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d49a569a-49ea-4458-b3e6-f7724b8fbef6/air-max-sc-shoe-stsz7b.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2fb9bedb-f858-41a2-a981-136b169132d5/air-max-sc-shoe-stsz7b.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2307907c-8483-4337-b725-51f5e37c1e85/air-max-sc-shoe-stsz7b.png'],
      price: 58.47,
      desc: `With its easy-going lines, heritage athletics look and, of course, visible Air cushioning, the Nike Air Max SC is the perfect finish to any outfit. The rich mixture of materials adds depth while making it a durable and lightweight shoe for everyday wear.`,
      gender: 'women',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    },
    {
      id: 60,
      name: `Nike Air Max 90 G`,
      img: ['https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/79f3a7b8-dbd4-4832-b324-735a205a4edf/air-max-90-g-golf-shoe-bGCBGn.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4038057a-eb13-41fc-a634-5ec907439eaf/air-max-90-g-golf-shoe-bGCBGn.png', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c14f3e36-bd74-4af0-93b2-4f2106750e41/air-max-90-g-golf-shoe-bGCBGn.png'],
      price: 119.95,
      desc: `The original Nike Air Max 90 was renowned for its clean lines and timeless style. The Nike Air Max 90 G stays true to the OG icon with a few updates made for golf, like integrated traction and a thin overlay that helps keep out water.`,
      gender: 'unisex',
      collection: 'max',
      featured: false,
      category: 'lifestyle'
    }
  ];
  
  const [bagItems, updateBagItems] = useState([]);
  
  const addItemToBag = item => {
    updateBagItems([...bagItems, item])
  }

  const deleteItem = (id, i) => {
    const updatedItems = bagItems;
    updatedItems.splice(i, 1);
    updateBagItems([...updatedItems]);
    
  }

  const changeQty = (id, i, qty) => {
    let items = bagItems;
    items[i].quantity = qty;
    updateBagItems([...items]);
  }

  return (
    <Router>
      <Nav bagItems={bagItems} itemCardsData={itemCardsData}/>
      <Switch>
        <Route path='/' render={props => <Home itemCardsData={itemCardsData} {...props} />} exact/>
        <Route path='/shop' render={props => <Shop itemCardsData={itemCardsData} {...props} />} exact/>
        <Route path='/shop/:id' render={props => <ItemPage addItemToBag={addItemToBag} {...props} />} />
        <Route path='/signin' component={SignIn} exact/>
        <Route path='/register' component={SignUp} exact/>
        <Route path='/bag' render={props => <ShoppingBag changeQty={changeQty} bagItems={bagItems} deleteItem={deleteItem} {...props} />} exact/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
