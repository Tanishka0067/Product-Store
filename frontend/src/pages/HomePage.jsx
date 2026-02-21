import { useProducts } from "../hooks/useProducts";
import { PackageIcon } from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import img from "../assets/img.svg";
import { useState, useEffect } from "react";
const stats = [
  { value: 10000, label: "Products" },
  { value: 5000, label: "Creators" },
  { value: 1000000, label: "Downloads" },
  { value: 120, label: "Countries" },
];

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  if (end >= 1000000) return <>{Math.floor(count / 1000000)}M+</>;
  if (end >= 1000) return <>{Math.floor(count / 1000)}K+</>;
  return <>{count}+</>;
}
function HomePage() {
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }
  return (
    <div className="relative space-y-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, -120, 40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/*  Announcement Bar */}
      <div className="bg-primary text-primary-content text-center py-2 text-sm font-medium">
        🎉 New creators joined today — Start selling now!
      </div>

      {/*  Infinite Banner */}
      <div className="overflow-hidden border-y border-base-300 py-4">
        <motion.div
          className="flex gap-16 text-lg font-semibold whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[
            "🚀 Upload",
            "🔥 Sell",
            "💎 Digital",
            "🎨 Creative",
            "⚡ Fast",
            "🌍 Global",
            "🚀 Upload",
            "🔥 Sell",
            "💎 Digital",
            "🎨 Creative",
            "⚡ Fast",
            "🌍 Global",
          ].map((item, i) => (
            <span key={i} className="text-primary">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/*  HERO SECTION */}
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto py-16">
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Discover & Share{" "}
              <span className="text-primary">Amazing Products</span>
            </h1>

            <p className="text-base-content/60 text-lg">
              A modern marketplace built for creators. Upload, explore, connect,
              and monetize your digital assets.
            </p>

            <div className="flex gap-4 flex-wrap">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start Selling
                </button>
              </SignInButton>

              <Link to="/products" className="btn btn-outline btn-lg">
                Explore Now
              </Link>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "UI Kits",
                "Templates",
                "Ebooks",
                "Icons",
                "Courses",
                "Designs",
              ].map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-base-200 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="grid grid-cols-2 gap-4">
            <img src={img} className="rounded-xl shadow-lg" />
            <img src={img} className="rounded-xl shadow-lg translate-y-6" />
            <img src={img} className="rounded-xl shadow-lg col-span-2" />
          </div>
        </div>
      </div>

      {/*  FEATURED PRODUCTS */}
      {products.length > 0 && (
        <div className="px-6 max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">🔥 Featured Products</h2>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="min-w-[280px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/*  STATS STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-base-300 py-16 text-center gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="space-y-3 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-base-200 hover:shadow-xl"
          >
            <div className="text-4xl font-extrabold text-primary">
              <CountUp end={stat.value} />
            </div>
            <div className="text-base-content/70 text-lg font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="h-24 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-xl mx-6" />

      {/*  ALL PRODUCTS */}
      <div className="px-6 max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <PackageIcon className="size-5 text-primary" />
          All Products
        </h2>

        {products.length === 0 ? (
          <div className="card bg-base-300">
            <div className="card-body items-center text-center py-16">
              <PackageIcon className="size-16 text-base-content/20" />
              <h3 className="card-title text-base-content/50">
                No products yet
              </h3>
              <p className="text-base-content/40 text-sm">
                Be the first to share something!
              </p>
              <Link to="/create" className="btn btn-primary btn-sm mt-2">
                Create Product
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/*  CTA SECTION */}
      <div className="px-6 max-w-5xl mx-auto pb-20">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your First Product?
          </h2>
          <p className="text-base-content/60 mb-6">
            Join thousands of creators building their digital future.
          </p>

          <SignInButton mode="modal">
            <button className="btn btn-primary btn-lg shadow-lg">
              Get Started Now
            </button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
