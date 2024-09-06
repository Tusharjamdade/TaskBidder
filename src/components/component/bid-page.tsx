
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BidPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Job Thumbnail"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Senior Frontend Developer</h2>
            <div className="flex items-center mb-4">
              <LocateIcon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">San Francisco, CA</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Required Skills</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>CSS/SCSS</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="flex items-center mb-4">
              <CalendarIcon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">Deadline: June 30, 2023</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Job Description</h3>
              <p className="text-muted-foreground">
                We are seeking a talented and experienced frontend developer to join our team. You will be responsible
                for building and maintaining complex web applications using modern technologies and best practices.
                Strong problem-solving skills and attention to detail are a must.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">Full-time</span>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Submit Your Proposal</h3>
          <form className="grid gap-4">
            <div>
              <Label htmlFor="proposal">Proposal</Label>
              <Textarea id="proposal" rows={5} placeholder="Enter your proposal" />
            </div>
            <div>
              <Label htmlFor="proposed-amount">Proposed Amount</Label>
              <Input type="number" id="proposed-amount" placeholder="Enter your proposed amount" />
            </div>
            <Button type="submit" className="justify-self-end">
              Submit Proposal
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
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


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
