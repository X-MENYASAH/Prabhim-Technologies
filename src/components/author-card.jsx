export function AuthorCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <img
          src="/assets/images/auth.jpg"
          alt="Author profile"
          width={64}
          height={64}
          className="rounded-full object-cover ring-2 ring-orange-500/20"
        />
      </div>
      <h3 className="font-semibold text-gray-900">Author</h3>
      <p className="text-gray-600 text-sm">PRABHIM Team</p>
    </div>
  )
}


