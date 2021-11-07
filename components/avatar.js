import Image from 'next/image'

const Logo = () => {
  const avatar = `/images/janlauber_tail.png`

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "30%" }} >
        <Image
            alt="Image Alt"
            src={avatar}
            layout="fill"
            objectFit="contain" // Scale your image down to fit into the container
        />
    </div>
    
  )
}

export default Logo