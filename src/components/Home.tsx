"use client"

import { useNavigate } from "react-router-dom"
import { TopHeader } from "../components/layout/TopHeader"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import {
  Layers,
  ArrowRight,
  BarChart3,
  Users,
  Search,
  FileText,
  BookOpen,
  Shield,
  ListTree,
  Settings,
  Target,
  CheckCircle,
  Zap,
} from "lucide-react"
import { Footer } from "../components/layout/Footer"

export function Home() {
  const navigate = useNavigate()
const modules = [
  {
    title: "Quality Reports",
    description: "View quality evaluation reports for statistical products",
    icon: Shield,
    path: "/metadata/quality-reports",
    bgColor: "bg-knbs-600",
    lightBg: "bg-knbs-50",
    accentColor: "text-knbs-600",
  },
  {
    title: "KeSQAF",
    description: "Kenya Statistical Quality Assurance Framework guidelines",
    icon: BookOpen,
    path: "/quality/kesqaf",
    bgColor: "bg-knbs-700",
    lightBg: "bg-knbs-50",
    accentColor: "text-knbs-700",
  },
  {
    title: "KSPM",
    description: "Kenya Statistics Production Manual and standards",
    icon: Settings,
    path: "/quality/kspm",
    bgColor: "bg-knbs-600",
    lightBg: "bg-knbs-100",
    accentColor: "text-knbs-600",
  },
  {
    title: "Codelists",
    description: "Standardized classifications and reference codes",
    icon: ListTree,
    path: "/metadata/codelists",
    bgColor: "bg-knbs-500",
    lightBg: "bg-knbs-50",
    accentColor: "text-knbs-700",
  },
  {
    title: "Classifications",
    description: "National and international statistical classifications",
    icon: Layers,
    path: "/metadata/classification/national",
    bgColor: "bg-knbs-700",
    lightBg: "bg-knbs-100",
    accentColor: "text-knbs-600",
  },
];



  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-knbs-700 via-knbs-600 to-knbs-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 40%)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-5xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="size-4" />
              <span className="text-sm font-medium">Official KNBS Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Statistical Quality & Metadata
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Making statistical information structured, searchable, and transparent for evidence-based decision making.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-knbs-700 hover:bg-knbs-50 transition-all duration-300 px-6 sm:px-8 py-5 sm:py-6 shadow-lg font-semibold text-base"
                onClick={() => navigate("/dashboard/metadata/quality-reports")}
              >
                Explore Quality & Metadata
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-knbs-600 to-knbs-700 text-white py-12 sm:py-16 border-b border-knbs-500">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Target className="size-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-center">Quality Assurance</h3>
              <p className="text-knbs-100 text-sm leading-relaxed text-center">
                Rigorous statistical standards ensure data integrity and reliability.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Search className="size-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-center">Easy Discovery</h3>
              <p className="text-knbs-100 text-sm leading-relaxed text-center">
                Seamless access to data through a searchable metadata system.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <CheckCircle className="size-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-center">Trusted Data</h3>
              <p className="text-knbs-100 text-sm leading-relaxed text-center">
                All information is verified, validated, and officially endorsed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-knbs-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-knbs-800 mb-4">Explore Resources</h2>
            <p className="text-base sm:text-lg text-knbs-700 max-w-2xl mx-auto leading-relaxed">
              Access comprehensive statistical resources, quality frameworks, and metadata documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 border border-knbs-200 hover:border-knbs-400 bg-white hover:shadow-xl overflow-hidden ${module.lightBg}`}
                onClick={() => navigate(module.path)}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${module.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <module.icon className="size-6 text-white" />
                  </div>
                  <CardTitle
                    className={`text-lg sm:text-xl font-semibold ${module.accentColor} group-hover:text-knbs-800 transition-colors`}
                  >
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-knbs-600 mt-2 leading-relaxed text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div
                    className={`flex items-center ${module.accentColor} group-hover:text-knbs-800 transition-colors text-sm font-medium`}
                  >
                    <span>Access Module</span>
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
