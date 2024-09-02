

export function GET(){
    const posts = [
        {
          id: 1,
          thumbnail: "/img2.jpg",
          title: "Tushar Nagnath Jamdade",
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
          thumbnail: "/img2.jpg",
          title: "Software Engineer",
          description:
            "We are looking for a skilled software engineer to join our team and help us build innovative new features for our platform.",
          category: "Engineering",
          location: "Remote",
          jobType: "Full-time",
        },
      ]
    return Response.json({
        posts
    },{status:200})
}