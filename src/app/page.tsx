'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import image from '../public/image.png'
import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-blue-600 text-white">
      <header className="flex justify-between items-center p-6">
        <motion.h1 
          className="text-3xl font-bold"
          {...fadeIn}
        >
          RENOVATORS
        </motion.h1>
        <div className="space-x-4">
          {/* <Button variant="outline">Sign Up</Button>
          <Button variant="outline">Sign In</Button> */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Renovators landing page template</h2>
          <p className="text-xl mb-6">
            The Renovators project aims to digitize the work processes of contractors, many of whom currently rely on analog methods such as manual bookkeeping for record-keeping.
          </p>
          <Link href="/dashboard">
            <Button size="lg">Get started</Button>
        </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className=" text-blue-600 p-6 rounded-lg shadow-lg"
            {...fadeIn}
          >
            {/* <h3 className="text-2xl font-bold mb-4">Customers</h3>
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-4xl font-bold">34,249</p>
                <p>New Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">1,420</p>
                <p>Repeated</p>
              </div>
            </div> */}
            <Image src="/images/customer.png" alt="Sales Analytics Graph" width={800} height={300} />
          </motion.div>
          <motion.div 
            className=" text-blue-600 p-6 rounded-lg shadow-lg"
            {...fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Sales Analytics</h3>
            <Image src="/images/image.png" alt="Sales Analytics Graph" width={800} height={300} />
          </motion.div>
        </div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="/images/dash.png" alt="Dashboard Preview" width={800} height={800} className="flex rounded-lg shadow-xl justify-items-center" />
        </motion.div>
        
        <div className='grid md:grid-cols-3 mb-12 flex-auto'>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {['Customizable card'].map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className=" w-16 h-16  mx-auto mb-4">
                <Image src="/images/card.png" alt="Feature Icon" width={64} height={64} />
                {/* <Image src="/images/pay.png" alt="Feature Icon" width={64} height={64} /> 
                <Image src="/images/image copy.png" alt="Feature Icon" width={64} height={64} /> */}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p>Custom your own card for your exact needs.</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[ 'No payment fee'].map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className=" w-16 h-16  mx-auto mb-4">
                {/* <Image src="/images/card.png" alt="Feature Icon" width={64} height={64} /> */}
                <Image src="/images/pay.png" alt="Feature Icon" width={64} height={64} /> 
                {/* <Image src="/images/image copy.png" alt="Feature Icon" width={64} height={64} /> */}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p>Custom your own card for your exact needs.</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {['All in one place'].map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className=" w-16 h-16  mx-auto mb-4">
                {/* <Image src="/images/card.png" alt="Feature Icon" width={64} height={64} /> */}
                {/* <Image src="/images/pay.png" alt="Feature Icon" width={64} height={64} />  */}
                <Image src="/images/image copy.png" alt="Feature Icon" width={64} height={64} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p>Custom your own card for your exact needs.</p>
            </motion.div>
          ))}
        </div>
        </div>
      </main>

      <footer className="bg-blue-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">RENOVATORS</h2>
              <p>© RENOVATORS 2022</p>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-bold mb-2">Updates right to your inbox</h3>
              <div className="flex">
                <Input type="email" placeholder="Email Address" className="text-white placeholder-gray-200 mr-2" />
                <Button>Send</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-sm">
            <a href="#" className="mr-4">Privacy policy</a>
            <a href="#" className="mr-4">Cookies policy</a>
            <a href="#" className="mr-4">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  )
}