import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Literacy Mission</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Foundation Story */}
          <div className="prose lg:prose-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Foundation</h3>
            <p className="text-gray-700 leading-relaxed">
              Abiding by the supreme duty of a human being to help the denizens of darkness emerge out to the bright shimmering sun, Literacy Mission was established in the winters of 2004. The founders of Literacy Mission were students of NITH Mr. Amit Sharma, Mr. Aseem Kapoor, Mr. Ashish Chaudhary and some other fellow mates, who were distressed at seeing the pitiable conditions of the kids who roamed in the campus and fantasized about a life worth living.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg font-medium text-blue-800 italic">
              "Literacy Mission started with the vision of adorning the lives of kids residing in the nearby slums with a garland of education so that their childhood would remain as precious as that of other children."
            </p>
          </div>

          {/* Background */}
          <div className="prose lg:prose-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Background</h3>
            <p className="text-gray-700 leading-relaxed">
              These kids come from families labouring at construction sites of which most are immigrants from different states and some from neighbouring countries as well foraging for livelihood. Their quality of life is so impoverish that they couldn't even provide basic necessities for the growth of their children.
            </p>
          </div>

          {/* Journey */}
          <div className="prose lg:prose-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              Initially, Literacy Mission faced trials and tribulations to accommodate kids and finance their needs. Moreover the volunteers backing the cause lacked the emotional endorsement. They couldn't even get rooms for teaching the kids. But soon, with the immense support of some of the faculty members and the college administration, Literacy Mission was able to get a place to dwell and develop.
            </p>
          </div>

          {/* Current Status */}
          <div className="prose lg:prose-lg">
            <h3 className="text-2xl font-semibold mb-4">Present Day</h3>
            <p className="text-gray-700 leading-relaxed">
              Literacy Mission earned its identity in 2006 when it was made an extra-curricular activity for students at NITH. Since then the Mission has attracted many students of the institute. The daily classes of Literacy Mission are held at the Vivekanand Lecture Hall Complex(VLHC) of NITH which enrolls more than 120 kids and several volunteers.
            </p>
          </div>

          {/* Quote Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <blockquote className="text-xl italic font-semibold text-gray-800">
              "Every child must know that he is a miracle, that since the beginning of the world there hasn't been, and until the end of the world there will not be, another child like him"
            </blockquote>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">120+</div>
              <div className="text-gray-600 mt-2">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2004</div>
              <div className="text-gray-600 mt-2">Year Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">18+</div>
              <div className="text-gray-600 mt-2">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
