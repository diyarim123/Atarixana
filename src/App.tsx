import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import type { NavItem } from '@/types/navbar'
import { Button } from '@/components/ui/button'
import { Sparkles, Gamepad2, Users, Send, ShieldCheck, Zap, Globe, Mail } from 'lucide-react'

export function App() {
  const [activeTab, setActiveTab] = useState<string>('Home')

  const handleNavItemClick = (item: NavItem) => {
    setActiveTab(item.label)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
      {/* Reusable Navbar Component */}
      <Navbar
        activeItem={activeTab}
        onItemClick={handleNavItemClick}
        actions={
          <Button
            size="sm"
            className="hidden sm:inline-flex bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-md transition-all duration-200 hover:scale-105"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            Get Started
          </Button>
        }
      />

      {/* Hero / Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto w-full">
        {/* Dynamic Section Based on Selected Nav Item */}
        {activeTab === 'Home' && (
          <section className="w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/50 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Gamepad2 className="h-4 w-4 text-primary" />
              <span>Next-Gen Gaming Platform</span>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                  Atarixana
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed">
                The ultimate destination for gamers and creators. Experience lightning-fast matchmaking,
                vibrant community hubs, and next-generation competitive play.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                onClick={() => setActiveTab('About')}
              >
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/60 font-semibold px-8"
                onClick={() => setActiveTab('Contact us')}
              >
                Contact Support
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-2 hover:border-primary/50 transition-all duration-200">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold">Ultra-Low Latency</h2>
                <p className="text-sm text-muted-foreground">
                  Engineered from the ground up for instantaneous responsiveness and zero lag.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-2 hover:border-primary/50 transition-all duration-200">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold">Global Matchmaking</h2>
                <p className="text-sm text-muted-foreground">
                  Connect and compete with passionate players from every corner of the world.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm space-y-2 hover:border-primary/50 transition-all duration-200">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold">Verified Fair Play</h2>
                <p className="text-sm text-muted-foreground">
                  Military-grade anti-cheat systems safeguarding integrity in every tournament.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'About' && (
          <section className="w-full max-w-3xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/50 text-xs font-medium text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>About Atarixana</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Built by Gamers, For Gamers
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Atarixana was founded with a singular purpose: to deliver an uncompromised, modern gaming experience.
              Whether you are an esports champion or playing casually after work, our platform adapts to your pace.
            </p>

            <div className="p-6 rounded-2xl border border-border/50 bg-secondary/30 space-y-4">
              <h2 className="text-xl font-bold">Navbar Component Architecture</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Full Type Safety:</strong> Typed with TypeScript interfaces (<code className="text-primary">NavbarProps</code>, <code className="text-primary">NavItem</code>).</li>
                <li><strong className="text-foreground">Tailwind CSS &amp; shadCN:</strong> Styled using the shadcn/ui button design tokens, variants (<code className="text-primary">ghost</code>, <code className="text-primary">secondary</code>, <code className="text-primary">default</code>), and clsx/tailwind-merge.</li>
                <li><strong className="text-foreground">Row Layout (justify-between):</strong> Responsive row dimension aligning brand logo and navigation buttons seamlessly.</li>
                <li><strong className="text-foreground">Asset Integration:</strong> Direct imported brand logo from <code className="text-primary">src/assets/logo.jpeg</code> with fallback support.</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'Contact us' && (
          <section className="w-full max-w-xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/50 text-xs font-medium text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>Get in Touch</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Contact Us</h1>
              <p className="text-muted-foreground">
                Have questions or feedback? Drop us a message and we will respond within 24 hours.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for contacting Atarixana!')
              }}
              className="space-y-4 p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  placeholder="gamer@atarixana.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you need..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Atarixana. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
