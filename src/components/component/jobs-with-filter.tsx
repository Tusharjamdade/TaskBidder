/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3tE5BCkxF6F
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export function JobsWithFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    category: [],
    location: [],
    jobType: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(9)
  const posts = [
    {
      id: 1,
      thumbnail: "/placeholder.svg",
      title: "Senior Frontend Developer",
      description:
        "We are looking for an experienced frontend developer to join our growing team. You will be responsible for building and maintaining our web applications.",
      category: "Engineering",
      location: "San Francisco, CA",
      jobType: "Full-time",
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg",
      title: "Marketing Coordinator",
      description:
        "Our marketing team is seeking a detail-oriented coordinator to help with campaign planning, content creation, and event organization.",
      category: "Marketing",
      location: "New York, NY",
      jobType: "Full-time",
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg",
      title: "Graphic Designer",
      description:
        "We need a talented graphic designer to create visually stunning designs for our brand and marketing materials.",
      category: "Design",
      location: "Chicago, IL",
      jobType: "Part-time",
    },
    {
      id: 4,
      thumbnail: "/placeholder.svg",
      title: "Data Analyst",
      description:
        "Join our data team and help us derive insights from our growing dataset to inform business decisions.",
      category: "Data",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      id: 5,
      thumbnail: "/placeholder.svg",
      title: "Sales Representative",
      description:
        "We are seeking an experienced sales representative to join our team and help us expand our customer base.",
      category: "Sales",
      location: "Boston, MA",
      jobType: "Full-time",
    },
    {
      id: 6,
      thumbnail: "/placeholder.svg",
      title: "Content Writer",
      description:
        "Our content team is looking for a skilled writer to create engaging blog posts, website copy, and marketing materials.",
      category: "Marketing",
      location: "Remote",
      jobType: "Part-time",
    },
    {
      id: 7,
      thumbnail: "/placeholder.svg",
      title: "Project Manager",
      description:
        "We need an experienced project manager to oversee the delivery of our client projects and ensure they are completed on time and within budget.",
      category: "Project Management",
      location: "Seattle, WA",
      jobType: "Full-time",
    },
    {
      id: 8,
      thumbnail: "/placeholder.svg",
      title: "UI/UX Designer",
      description:
        "Join our design team and help us create intuitive and visually appealing user experiences for our web and mobile applications.",
      category: "Design",
      location: "Los Angeles, CA",
      jobType: "Full-time",
    },
    {
      id: 9,
      thumbnail: "/placeholder.svg",
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to join our team and help us build innovative new features for our platform.",
      category: "Engineering",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      id: 9,
      thumbnail: "/placeholder.svg",
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to join our team and help us build innovative new features for our platform.",
      category: "Engineering",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      id: 9,
      thumbnail: "/placeholder.svg",
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to join our team and help us build innovative new features for our platform.",
      category: "Engineering",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      id: 9,
      thumbnail: "/placeholder.svg",
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to join our team and help us build innovative new features for our platform.",
      category: "Engineering",
      location: "Remote",
      jobType: "Full-time",
    },
  ]
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(post.category)
      const locationMatch = filters.location.length === 0 || filters.location.includes(post.location)
      const jobTypeMatch = filters.jobType.length === 0 || filters.jobType.includes(post.jobType)
      const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && locationMatch && jobTypeMatch && searchMatch
    })
  }, [filters, searchTerm])
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }))
    setCurrentPage(1)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="w-full">
      <header className="bg-background p-4 md:p-6 shadow">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 w-full rounded-md bg-muted text-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Engineering")}
                  onCheckedChange={() => handleFilterChange("category", "Engineering")}
                >
                  Engineering
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Marketing")}
                  onCheckedChange={() => handleFilterChange("category", "Marketing")}
                >
                  Marketing
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Design")}
                  onCheckedChange={() => handleFilterChange("category", "Design")}
                >
                  Design
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Data")}
                  onCheckedChange={() => handleFilterChange("category", "Data")}
                >
                  Data
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Sales")}
                  onCheckedChange={() => handleFilterChange("category", "Sales")}
                >
                  Sales
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.category.includes("Project Management")}
                  onCheckedChange={() => handleFilterChange("category", "Project Management")}
                >
                  Project Management
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("San Francisco, CA")}
                  onCheckedChange={() => handleFilterChange("location", "San Francisco, CA")}
                >
                  San Francisco, CA
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("New York, NY")}
                  onCheckedChange={() => handleFilterChange("location", "New York, NY")}
                >
                  New York, NY
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("Chicago, IL")}
                  onCheckedChange={() => handleFilterChange("location", "Chicago, IL")}
                >
                  Chicago, IL
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("Remote")}
                  onCheckedChange={() => handleFilterChange("location", "Remote")}
                >
                  Remote
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("Boston, MA")}
                  onCheckedChange={() => handleFilterChange("location", "Boston, MA")}
                >
                  Boston, MA
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("Seattle, WA")}
                  onCheckedChange={() => handleFilterChange("location", "Seattle, WA")}
                >
                  Seattle, WA
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.location.includes("Los Angeles, CA")}
                  onCheckedChange={() => handleFilterChange("location", "Los Angeles, CA")}
                >
                  Los Angeles, CA
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.jobType.includes("Full-time")}
                  onCheckedChange={() => handleFilterChange("jobType", "Full-time")}
                >
                  Full-time
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.jobType.includes("Part-time")}
                  onCheckedChange={() => handleFilterChange("jobType", "Part-time")}
                >
                  Part-time
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-background rounded-md shadow overflow-hidden">
              <img
                src="/placeholder.svg"
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <Badge variant="outline">{post.location}</Badge>
                  <Badge variant="outline">{post.jobType}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink onClick={() => handlePageChange(page)} isActive={page === currentPage}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  )
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
