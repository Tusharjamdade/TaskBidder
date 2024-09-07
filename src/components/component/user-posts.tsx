import React from 'react'; 
export function UserPosts() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Your Posted Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <div className="aspect-video bg-muted">
            <img
              src="/placeholder.svg"
              alt="Job Thumbnail"
              width={400}
              height={225}
              className="object-cover w-full h-full"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Frontend Developer</h2>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">React</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">JavaScript</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">CSS</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>Deadline: June 30, 2023</span>
            </div>
            <p className="text-sm text-muted-foreground">
              We are looking for an experienced frontend developer to join our team and help build our next-generation
              web application.
            </p>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <div className="aspect-video bg-muted">
            <img
              src="/placeholder.svg"
              alt="Job Thumbnail"
              width={400}
              height={225}
              className="object-cover w-full h-full"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Backend Developer</h2>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>New York, NY</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">Node.js</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">Express</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">MongoDB</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>Deadline: July 15, 2023</span>
            </div>
            <p className="text-sm text-muted-foreground">
              We are seeking a skilled backend developer to join our team and help build the infrastructure for our new
              web application.
            </p>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <div className="aspect-video bg-muted">
            <img
              src="/placeholder.svg"
              alt="Job Thumbnail"
              width={400}
              height={225}
              className="object-cover w-full h-full"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mobile Developer</h2>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>Seattle, WA</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">React Native</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">Swift</span>
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">Kotlin</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>Deadline: August 1, 2023</span>
            </div>
            <p className="text-sm text-muted-foreground">
              We are looking for a talented mobile developer to join our team and help build our iOS and Android
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
