const user = require('./user.js');

async function status (ctx) {
  try {
    var uid = ctx.params.uid,
    data = await user(uid),
    body = await MAKEsvg(data)

    ctx.set('content-type', 'image/svg+xml')
    ctx.body = body
  } 
  catch {
    var body = 'Internal Discostatus Error'
  }
  finally {
    ctx.body = body
  }
}

async function MAKEsvg (data) {
  return `
  <svg width='300' height='220' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' role='img'>
    <foreignObject width='300' height='220'>
      <style>
        .container {
          font-family: Ginto,'Helvetica Neue',Helvetica,Arial,sans-serif;
          font-weight: 700;
          width:280px; height:200px;
          padding: 10px;
          background: #18191c;
          border-radius: 8px;
        }
        .user {
          display: grid;
        }
        img {
          object-fit: cover;
        }
        .banner {
          position: absolute;
          right:0px; top:0px;
          width:300px; height:50px;
          background: ${data.bannerColor};
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }
        .badges {
          display: flex;
          gap: 4px;
          position: absolute;
          right:20px; top:66px;
        }
        .hypesquad {
          display: ${data.hypesquad || 'block'};
        }
        .earlysupporter {
          display: ${data.earlysupporter || 'block'};
        }
        .nitro {
          display: ${data.nitro || 'block'};
        }
        .avatar {
          width:68px; height:68px;
          background: #18191c;
          border: 6px solid #18191c;
          border-radius: 50px;
          overflow: hidden;
          z-index: 2;
        }
        .status {
          position: absolute;
          top:60px; left:60px;
          width:15px; height:15px;
          background: #18191c;
          border: 6px solid #18191c;
          border-radius: 15px;
        }
        .name {
          color: #fff;
          font-size: 15px;
        }
        .discriminator {
          color: #b9bbbe;
          font-size: 15px;
        }
        .username {
          padding: 2px 0;
        }
        .activities {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 60px 200px;
          grid-gap: 12px;
          height: 95px;
        }
        .cover {
          width:60px; height:60px;
          border-radius: 8px;
          overflow: hidden;
        }
        .coverTwo {
          position: absolute;
          top:168px; left:52px;
          width:20px; height:20px;
          background: #18191c;
          border: 4px solid #18191c;
          border-radius: 15px;
        }
        .text-wrap {
          display: grid;
          align-content: left;  
          overflow: hidden;
        }
        .zeroOne {
          color: #fff;
          font-size: 13px;
        }
        .zeroTwo,
        .zeroThree,
        .zeroFour {
          color: #fff;
          font-size: 11px;
          font-weight: 500;
        }
        .zeroOne,
        .zeroTwo,
        .zeroThree,
        .zeroFour {
          padding: 1px 0;
          width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div xmlns='http://www.w3.org/1999/xhtml' class='container'>
        <div class='user'>
          <div class='banner'>
            <img src='data:image/webp;base64,${data.bannerImage}' width='300' height='50'/>
          </div>
          <div class='badges'> 
            <img class='hypesquad' src='data:image/webp;base64,${data.hypesquadBadge}' width='15' height='15'/>
            <img class='earlysupporter' src='data:image/webp;base64,${data.earlysupporterBadge}' width='15' height='15'/>
            <img class='nitro' src='data:image/webp;base64,${data.nitroBadge}' width='15' height='15'/>
          </div>
          <div class='avatar'>
            <img src='data:image/webp;base64,${data.avatarImage}' width='68' height='68'/>
            <img class='status' src='data:image/png;base64,${data.userStatus}' width='15' height='15'/>
          </div>
          <div class='username'>
            <span class='name'>${data.userName}</span><span class='discriminator'>#${data.userDiscriminator}</span>
          </div>
        </div>
        <div class='activities'>
          <div class='cover'>
            <img src='data:image/webp;base64,${data.coverImage}' width='60' height='60'/>
            <img class='coverTwo' src='data:image/webp;base64,${data.coverTwoImage}' width='20' h5ight='20'/>
          </div>
          <div class='text-wrap'>
            <div class='zeroOne'>${data.zeroOne.replace('&','&amp;')}</div>
            <div class='zeroTwo'>${data.zeroTwo.replace('&','&amp;')}</div>
            <div class='zeroThree'>${data.zeroThree.replace('&','&amp;')}</div>
            <div class='zeroFour'>${data.zeroFour}</div>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>`
}

module.exports = status;