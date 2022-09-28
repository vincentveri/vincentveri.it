import Image from 'next/image'

function Avatar() {
    return <Image src="/profile.jpg" alt="me" width="64" height="64" class="h-64 w-64 rounded-full" />
}

export default Avatar