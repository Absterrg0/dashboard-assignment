"use client"
import { motion } from "motion/react"
import { Lock, Sparkles, ArrowRight, Heart } from "lucide-react"
import { signIn } from "next-auth/react"

export default function SignInComponent() {
  const handleGoogleSignIn = () => signIn("google", { callbackUrl: "/home" })  

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative"
      >
        {/* Background decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />

        {/* Main card with metallic effect */}
        <motion.div className="relative" whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
          {/* Multiple shadow layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl transform rotate-1 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-3xl blur-lg transform -rotate-1 scale-103" />

          {/* Main metallic card */}
          <div className="relative bg-gradient-to-br from-card via-card to-secondary/30 backdrop-blur-xl border-2 border-border rounded-3xl shadow-2xl overflow-hidden">
            {/* Side metallic highlights */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />



            {/* Content with enhanced backdrop */}
            <div className="relative z-10 p-8 bg-gradient-to-b from-card/80 via-card/90 to-card/95 backdrop-blur-sm">
              {/* Logo section remains the same */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  {/* Enhanced metallic logo container */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center shadow-lg border border-primary/20">
                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-primary/90 to-accent/90" />
                    <Heart
                      className="relative z-10 w-8 h-8 text-primary-foreground drop-shadow-sm"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Rest of the content remains the same until the sign-in button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-8"
              >
                <h1 className="text-3xl font-bold mb-3 tracking-tight text-foreground drop-shadow-sm">
                  Welcome to{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    HealthPlus
                  </span>
                </h1>
                <p className="text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
                  Your comprehensive health companion. Sign in to access personalized health insights and tools.
                </p>
              </motion.div>

              {/* Enhanced metallic sign-in button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8"
              >
                <motion.button
                  onClick={handleGoogleSignIn}
                  className="w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, 
                      hsl(var(--card)) 0%, 
                      hsl(var(--secondary)) 50%, 
                      hsl(var(--card)) 100%)`,
                    border: "2px solid hsl(var(--border))",
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                      0 4px 8px rgba(0, 0, 0, 0.1)
                    `,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Inner metallic border */}
                  <div className="absolute inset-[1px] rounded-2xl border border-primary/10" />

                  {/* Metallic hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-muted/50 to-secondary/50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Google icon remains the same */}
                  <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>

                  <span className="relative z-10 font-semibold text-foreground group-hover:text-foreground">
                    Continue with Google
                  </span>

                  <ArrowRight className="relative z-10 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </motion.button>
              </motion.div>

              {/* Enhanced features section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid grid-cols-3 gap-4 mb-4"
              >
                {[
                  { icon: <Heart className=" h-5 w-5" />, text: "Health Tracking", color: "text-primary" },
                  { icon: <Lock className="h-5 w-5" />, text: "Secure & Private", color: "text-accent" },
                  { icon: <Sparkles className="h-5 w-5" />, text: "AI Insights", color: "text-primary" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl mb-2 transition-all duration-300 ${feature.color} relative overflow-hidden group`}
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(var(--muted)) 0%, 
                          hsl(var(--secondary)) 50%, 
                          hsl(var(--muted)) 100%)`,
                        border: "1px solid hsl(var(--border))",
                        // Enhanced shadow: soft outer shadow + subtle metallic inner
                        boxShadow: `
                          0 4px 16px 0 rgba(255, 126, 95, 0.10), /* soft primary shadow */
                          0 1.5px 6px 0 rgba(254, 180, 123, 0.10), /* accent shadow */
                          0 2px 8px 0 rgba(0,0,0,0.08), /* general soft shadow */
                          inset 0 1.5px 0 rgba(255, 255, 255, 0.13)
                        `,
                      }}
                      whileHover={{ scale: 1.12, rotate: 5, boxShadow: "0 8px 32px 0 rgba(255, 126, 95, 0.18), 0 3px 12px 0 rgba(254, 180, 123, 0.15), 0 4px 16px 0 rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.18)" }}
                    >
                      {/* Inner highlight */}
                      <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-card/20 to-transparent pointer-events-none" />
                      <div className="relative z-10">{feature.icon}</div>
                    </motion.div>
                    <span className="text-sm text-muted-foreground font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Terms section remains the same */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-start justify-center space-x-2">
                  <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                    By continuing, you agree to our{" "}
                    <motion.span
                      className="text-primary cursor-pointer hover:text-accent font-medium inline-flex items-center"
                      whileHover={{ x: 2 }}
                    >
                      Terms of Service
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.span>{" "}
                    and{" "}
                    <motion.span
                      className="text-primary cursor-pointer hover:text-accent font-medium inline-flex items-center"
                      whileHover={{ x: 2 }}
                    >
                      Privacy Policy
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced bottom metallic accent */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
