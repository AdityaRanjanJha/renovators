'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Camera } from "lucide-react"

export function AddContactForm() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Card className="mx-auto max-w-3xl p-6 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold mb-8">Add New Contact</h1>
        
        <div className="space-y-8">
          {/* Photo Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm text-blue-500">Upload Photo</span>
              </div>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
              />
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">First Name</label>
              <Input 
                placeholder="Enter your first name"
                className="w-full bg-gray-50"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Last Name</label>
              <Input 
                placeholder="Enter your last name"
                className="w-full bg-gray-50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Your email</label>
              <Input 
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-50"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Phone Number</label>
              <Input 
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-gray-50"
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Date of Birth</label>
              <Input 
                type="date"
                placeholder="Enter your birthdate"
                className="w-full bg-gray-50"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Gender</label>
              <Select>
                <SelectTrigger className="w-full bg-gray-50">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button className="w-full md:w-[200px] bg-blue-500 hover:bg-blue-600 text-white">
              Add Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}