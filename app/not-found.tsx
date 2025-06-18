import ComingSoon from "@/components/coming-soon";






export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ComingSoon 
        title="In development"
        description="The feature is currently under development."
      />
    </div>
  )
}