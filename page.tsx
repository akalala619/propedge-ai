import Link from 'next/link';
import { ArrowRight, Brain, TrendingUp, Shield, ChevronRight, Star, ChartBar as BarChart3, Zap, Target, Activity, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';

const stats = [
  { value: '89.3%', label: 'Model Accuracy' },
  { value: '2,400+', label: 'Daily Props Analyzed' },
  { value: '+18.7%', label: 'Avg ROI This Season' },
  { value: '47ms', label: 'Line Move Detection' },
];

const features = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description:
      'Our proprietary AI analyzes 200+ data points per player including recent performance, matchup history, pace of play, and injury reports.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Line Movement',
    description:
      'Detect sharp money and line movements across all major sportsbooks in under 50ms, giving you a first-mover advantage.',
  },
  {
    icon: Target,
    title: 'Positive EV Identification',
    description:
      'We calculate true probability vs. implied sportsbook probability to surface only positive expected value bets.',
  },
  {
    icon: Shield,
    title: 'Bankroll Protection',
    description:
      'Kelly Criterion sizing recommendations and risk management built into every pick to protect your bankroll long-term.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Deep-dive into player splits, usage rates, defensive matchups, and historical prop performance across all conditions.',
  },
  {
    icon: Activity,
    title: 'Live Updates',
    description:
      'Picks are updated in real-time as injury news breaks, lineups are confirmed, and sportsbook lines shift.',
  },
];

const testimonials = [
  {
    quote: 'PropEdge AI completely changed how I approach prop betting. Up 34% this NBA season.',
    author: 'Michael T.',
    role: 'Pro Bettor',
    stars: 5,
  },
  {
    quote: "The EV calculations are incredibly accurate. I've never had a tool this precise.",
    author: 'Sarah K.',
    role: 'Sports Analyst',
    stars: 5,
  },
  {
    quote: 'Found a +127 unit swing in 3 months. The AI genuinely detects value before the books adjust.',
    author: 'James R.',
    role: 'VIP Member',
    stars: 5,
  },
];

const livePicks = [
  { player: 'LeBron James', team: 'LAL', prop: 'Points', line: 'Over 25.5', odds: '-115', ev: '+8.2%', conf: 87 },
  { player: 'Jayson Tatum', team: 'BOS', prop: 'Assists', line: 'Over 4.5', odds: '-108', ev: '+6.1%', conf: 82 },
  { player: 'Nikola Jokic', team: 'DEN', prop: 'Rebounds', line: 'Over 11.5', odds: '+102', ev: '+12.4%', conf: 91 },
  { player: 'Stephen Curry', team: 'GSW', prop: '3-Pointers', line: 'Over 4.5', odds: '-120', ev: '+5.8%', conf: 79 },
  { player: 'Giannis A.', team: 'MIL', prop: 'Points', line: 'Over 30.5', odds: '-105', ev: '+9.7%', conf: 85 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00ff87]/3 blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#00ff87]/2 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff87]/20 bg-[#00ff87]/5 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
              <span className="neon-text font-medium">Live AI Picks Active</span>
              <span className="text-white/40">·</span>
              <span className="text-white/60">NBA Season 2025-26</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-white">AI-Powered Player</span>
              <br />
              <span className="text-gradient">Prop Picks</span>
              <br />
              <span className="text-white">Before the Line Moves</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Beat the sportsbooks with machine learning models trained on millions of player performances.
              We find positive EV before the sharp money moves the line.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black gradient-neon hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all duration-300 text-base"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-base"
              >
                View Today&apos;s Picks
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up delay-400 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-[#111]/60 border border-white/5 hover:border-[#00ff87]/20 transition-colors"
              >
                <div className="text-3xl font-bold neon-text mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Picks Ticker */}
      <section className="border-y border-white/5 bg-[#0a0a0a] py-4 overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 px-4 py-1 mr-4 border-r border-white/5">
            <span className="neon-text text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
              Live Picks
            </span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-8 animate-ticker whitespace-nowrap">
              {[...livePicks, ...livePicks].map((pick, i) => (
                <div key={i} className="inline-flex items-center gap-3 text-sm shrink-0">
                  <span className="font-semibold text-white">{pick.player}</span>
                  <span className="text-white/40">{pick.team}</span>
                  <span className="text-white/60">{pick.prop}</span>
                  <span className="text-white">{pick.line}</span>
                  <span className="px-2 py-0.5 rounded-md bg-[#00ff87]/10 neon-text text-xs font-semibold">{pick.ev}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff87]/5 border border-[#00ff87]/15 text-xs neon-text font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3 h-3" />
              Why PropEdge AI
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The Edge That Beats <span className="neon-text">The Books</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Built by data scientists and professional bettors who understand both sides of the line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#00ff87]/20 hover:bg-[#111]/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00ff87]/10 flex items-center justify-center mb-4 group-hover:bg-[#00ff87]/15 transition-colors">
                  <feature.icon className="w-5 h-5 neon-text" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff87]/5 border border-[#00ff87]/15 text-xs neon-text font-semibold uppercase tracking-wider mb-4">
              <Activity className="w-3 h-3" />
              Process
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              How PropEdge AI <span className="neon-text">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Data Collection',
                desc: 'We ingest live data from 50+ sources including player tracking, box scores, injury reports, and betting lines across all major books.',
                icon: Activity,
              },
              {
                step: '02',
                title: 'AI Analysis',
                desc: 'Our ensemble models process 200+ features per player-prop combination, running simulations to calculate true probability of hitting.',
                icon: Brain,
              },
              {
                step: '03',
                title: 'EV Calculation',
                desc: 'We compare our true probability against sportsbook implied probability to identify positive expected value and rank picks by confidence.',
                icon: TrendingUp,
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#111] border border-white/8 mb-6">
                  <item.icon className="w-7 h-7 neon-text" />
                </div>
                <div className="text-xs neon-text font-bold tracking-widest mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff87]/5 border border-[#00ff87]/15 text-xs neon-text font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3 h-3" />
              Community
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="neon-text">Serious Bettors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00ff87] text-[#00ff87]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#00ff87]/3 to-[#050505]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff87]/5 border border-[#00ff87]/15 text-xs neon-text font-semibold uppercase tracking-wider mb-6">
            <Award className="w-3 h-3" />
            Start Winning Today
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Beat <span className="neon-text">The Books?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
            Join 12,000+ bettors using AI to gain a systematic edge. Start free, upgrade when you&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-black gradient-neon hover:shadow-[0_0_40px_rgba(0,255,135,0.4)] transition-all duration-300 text-base"
            >
              Start Free — 3 Picks Daily
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/70 border border-white/10 hover:text-white hover:border-white/20 transition-all duration-300 text-base"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-white/30 text-sm">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg gradient-neon flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
              </div>
              <span className="font-bold">
                <span className="text-white">Prop</span>
                <span className="neon-text">Edge</span>
                <span className="text-white/40 text-sm font-normal ml-1">AI</span>
              </span>
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <Link href="/dashboard" className="hover:text-white/70 transition-colors">Dashboard</Link>
              <Link href="/pricing" className="hover:text-white/70 transition-colors">Pricing</Link>
              <Link href="/login" className="hover:text-white/70 transition-colors">Login</Link>
            </div>
            <p className="text-xs text-white/25">
              &copy; 2026 PropEdge AI. For entertainment purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
