import DisplayUser from '@/components/DisplayUser'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <DisplayUser />
      </div>
    </div>
  )
}

