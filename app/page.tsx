"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";

const NAVY = "#001F3F";
const GOLD = "#F7E7CE";
const CHARCOAL = "#1E1E1E";
const BLUSH = "#E8C7C0";

const feelings = [
  "I Deserve This",
  "This Is So Me",
  "Feeling Rich",
  "Soft Luxury",
  "Main Character Energy",
  "Office Chic",
  "Vacation Mood",
  "Looks Expensive",
  "Gift-Worthy Finds",
  "No-Regret Picks",
  "I Need a Reset",
  "People I Trust Love It",
];

const allStores = [
  "All Stores",
  "Starbucks",
  "Costco",
  "Walmart",
  "Panera Bread",
  "Dunkin",
  "Target",
  "Amazon",
  "TJ Maxx",
  "Marshalls",
  "Nordstrom",
  "Bloomingdale's",
  "Saks Fifth Avenue",
  "Macy's",
  "Neiman Marcus",
  "Bergdorf Goodman",
  "Sephora",
  "Ulta Beauty",
  "Bath & Body Works",
  "Zara",
  "SHEIN",
  "H&M",
  "ASOS",
  "Fashion Nova",
  "Nasty Gal",
  "Princess Polly",
  "Forever 21",
  "Primark",
  "Anthropologie",
  "Free People",
  "Aritzia",
  "Abercrombie & Fitch",
  "Madewell",
  "Banana Republic",
  "Gap",
  "Everlane",
  "Uniqlo",
  "COS",
  "Lululemon",
  "Alo Yoga",
  "Nike",
  "Under Armour",
  "Vuori",
  "Coach",
  "Tory Burch",
  "Ralph Lauren",
  "Tiffany & Co.",
  "Louis Vuitton",
  "Chanel",
  "Dior",
  "Gucci",
  "Prada",
  "Saint Laurent",
  "Miu Miu",
  "Loewe",
];

const allCategories = [
  "All Categories",
  "Everyday Shopping",
  "Beauty",
  "Skincare",
  "Makeup",
  "Haircare",
  "Fashion",
  "Workwear",
  "Designer",
  "Handbags",
  "Shoes",
  "Jewelry",
  "Accessories",
  "Athleisure",
  "Wellness",
  "Home",
  "Travel",
  "Electronics",
  "Groceries",
  "Coffee & Food",
  "Gifts",
];

const allProductTypes = [
  "All Products",
  "Handbags",
  "Tote Bags",
  "Crossbody Bags",
  "Shoes",
  "Heels",
  "Sneakers",
  "Dresses",
  "Blazers",
  "Work Pants",
  "Jewelry",
  "Sunglasses",
  "Skincare Sets",
  "Makeup Sets",
  "Candles",
  "Robes",
  "Lounge Sets",
  "Travel Bags",
  "Coffee",
  "Groceries",
  "Electronics",
  "Athletic Wear",
  "Designer Inspiration",
];

const discountOptions = [
  "Best Discount",
  "10%+ Off",
  "20%+ Off",
  "30%+ Off",
  "40%+ Off",
  "50%+ Off",
];

type Product = {
  id: number;
  name: string;
  store: string;
  category: string;
  product_type: string;
  feeling: string;
  original_price: number | null;
  sale_price: number | null;
  discount_percent: number | null;
  worth_it_rating: number | null;
  image_url: string | null;
  affiliate_url: string | null;
  reason: string | null;
};

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Structured Neutral Handbag",
    store: "Coach",
    category: "Handbags",
    product_type: "Handbags",
    feeling: "Looks Expensive",
    original_price: 295,
    sale_price: 189,
    discount_percent: 36,
    worth_it_rating: 9.2,
    image_url:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "A polished everyday bag with a clean structure, neutral tone, and strong cost-per-use value.",
  },
  {
    id: 2,
    name: "Clean Work Tote",
    store: "Tory Burch",
    category: "Workwear",
    product_type: "Tote Bags",
    feeling: "Office Chic",
    original_price: 398,
    sale_price: 279,
    discount_percent: 30,
    worth_it_rating: 9.0,
    image_url:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "Professional, structured, and useful for women who want to look composed and capable.",
  },
  {
    id: 3,
    name: "Soft Lounge Set",
    store: "Aritzia",
    category: "Wellness",
    product_type: "Lounge Sets",
    feeling: "Soft Luxury",
    original_price: 148,
    sale_price: 98,
    discount_percent: 34,
    worth_it_rating: 8.8,
    image_url:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "Comfortable, calm, and polished enough for home, errands, airport days, and weekends.",
  },
  {
    id: 4,
    name: "Minimal Gold Hoop Earrings",
    store: "Nordstrom",
    category: "Jewelry",
    product_type: "Jewelry",
    feeling: "No-Regret Picks",
    original_price: 72,
    sale_price: 49,
    discount_percent: 32,
    worth_it_rating: 8.9,
    image_url:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "Simple, polished, repeatable jewelry that upgrades basics without looking forced.",
  },
  {
    id: 5,
    name: "Vacation Linen Dress",
    store: "Mango",
    category: "Fashion",
    product_type: "Dresses",
    feeling: "Vacation Mood",
    original_price: 120,
    sale_price: 79,
    discount_percent: 34,
    worth_it_rating: 8.7,
    image_url:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "Easy resort polish that packs well and works for dinner, beach days, and warm-weather weekends.",
  },
  {
    id: 6,
    name: "Polished Beauty Set",
    store: "Sephora",
    category: "Beauty",
    product_type: "Makeup Sets",
    feeling: "Gift-Worthy Finds",
    original_price: 86,
    sale_price: 59,
    discount_percent: 31,
    worth_it_rating: 8.6,
    image_url:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "A safe, polished beauty gift that feels useful, attractive, and easy to justify.",
  },
  {
    id: 7,
    name: "Signature Scent Candle",
    store: "Bath & Body Works",
    category: "Home",
    product_type: "Candles",
    feeling: "I Deserve This",
    original_price: 26,
    sale_price: 14,
    discount_percent: 46,
    worth_it_rating: 8.4,
    image_url:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=1200&auto=format&fit=crop",
    affiliate_url: "#",
    reason:
      "A small treat that makes home feel calmer, warmer, and more intentional.",
  },
];

function money(value: number | null) {
  if (!value) return "$0";
  return `$${Number(value).toFixed(0)}`;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [stores, setStores] = useState<string[]>(allStores);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  const [query, setQuery] = useState("");
  const [feeling, setFeeling] = useState("All Feelings");
  const [store, setStore] = useState("All Stores");
  const [category, setCategory] = useState("All Categories");
  const [productType, setProductType] = useState("All Products");
  const [discount, setDiscount] = useState("Best Discount");

  const [applied, setApplied] = useState({
    query: "",
    feeling: "All Feelings",
    store: "All Stores",
    category: "All Categories",
    productType: "All Products",
    discount: "Best Discount",
  });

  useEffect(() => {
    async function loadSupabaseData() {
      setLoading(true);

      if (!supabase) {
        setProducts(sampleProducts);
        setStores(allStores);
        setNotice(
          "Supabase connection is not loading yet. Showing sample products, but full dropdowns remain available."
        );
        setLoading(false);
        return;
      }

      try {
        const { data: storeData, error: storeError } = await supabase
          .from("stores")
          .select("name")
          .eq("is_active", true)
          .order("name");

        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("is_active", true)
          .order("worth_it_rating", { ascending: false });

        if (storeError || productError) {
          setNotice(
            "Supabase connection is not loading yet. Showing sample products, but full dropdowns remain available."
          );
          setProducts(sampleProducts);
          setStores(allStores);
          setLoading(false);
          return;
        }

        if (storeData && storeData.length > 0) {
          const liveStores = storeData.map((item) => item.name);
          setStores(["All Stores", ...Array.from(new Set([...liveStores, ...allStores.slice(1)]))]);
        } else {
          setStores(allStores);
        }

        if (productData && productData.length > 0) {
          setProducts(productData as Product[]);
          setNotice("");
        } else {
          setProducts(sampleProducts);
          setNotice("No active Supabase products found yet. Showing sample products.");
        }
      } catch {
        setProducts(sampleProducts);
        setStores(allStores);
        setNotice(
          "Supabase connection is not loading yet. Showing sample products, but full dropdowns remain available."
        );
      }

      setLoading(false);
    }

    loadSupabaseData();
  }, []);

  const results = useMemo(() => {
    const minDiscount =
      applied.discount === "Best Discount"
        ? 0
        : Number(applied.discount.replace("%+ Off", ""));

    const filtered = products.filter((product) => {
      const search = applied.query.toLowerCase();

      const matchesQuery =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.store.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.product_type.toLowerCase().includes(search) ||
        product.feeling.toLowerCase().includes(search);

      const matchesFeeling =
        applied.feeling === "All Feelings" || product.feeling === applied.feeling;

      const matchesStore =
        applied.store === "All Stores" || product.store === applied.store;

      const matchesCategory =
        applied.category === "All Categories" ||
        product.category === applied.category;

      const matchesProduct =
        applied.productType === "All Products" ||
        product.product_type === applied.productType;

      const matchesDiscount =
        Number(product.discount_percent || 0) >= minDiscount;

      return (
        matchesQuery &&
        matchesFeeling &&
        matchesStore &&
        matchesCategory &&
        matchesProduct &&
        matchesDiscount
      );
    });

    return filtered.length > 0
      ? filtered.sort(
          (a, b) =>
            Number(b.worth_it_rating || 0) +
            Number(b.discount_percent || 0) / 100 -
            (Number(a.worth_it_rating || 0) +
              Number(a.discount_percent || 0) / 100)
        )
      : products;
  }, [applied, products]);

  function searchFinds() {
    setApplied({ query, feeling, store, category, productType, discount });
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function reset() {
    setQuery("");
    setFeeling("All Feelings");
    setStore("All Stores");
    setCategory("All Categories");
    setProductType("All Products");
    setDiscount("Best Discount");

    setApplied({
      query: "",
      feeling: "All Feelings",
      store: "All Stores",
      category: "All Categories",
      productType: "All Products",
      discount: "Best Discount",
    });
  }

  function feelingSearch(selectedFeeling: string) {
    setFeeling(selectedFeeling);
    setApplied({
      query: "",
      feeling: selectedFeeling,
      store: "All Stores",
      category: "All Categories",
      productType: "All Products",
      discount: "Best Discount",
    });

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <main style={{ backgroundColor: "#F4F1EC", color: CHARCOAL }}>
      <header
        className="sticky top-0 z-50 border-b px-6 py-4 shadow-sm"
        style={{ backgroundColor: NAVY, borderColor: GOLD }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <p className="font-serif text-2xl font-semibold text-white">
              LUMIÈRE
            </p>
            <p className="text-xs tracking-[0.25em]" style={{ color: GOLD }}>
              WORTH-IT FINDS
            </p>
          </div>

          <nav className="hidden gap-5 text-sm text-white/80 md:flex">
            <a href="/disclosure">Affiliate Disclosure</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: NAVY }}>
            Curated luxury-looking finds
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Expensive taste. Disciplined spending.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
            Deals worth buying — selected for style, trust, value, emotional
            discovery, and no-regret shopping.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#search"
              className="rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: NAVY, color: GOLD }}
            >
              Start Searching
            </a>
            <a
              href="#feelings"
              className="rounded-full border bg-white px-6 py-3 text-sm font-semibold"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Shop by Feeling
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
          ].map((image, index) => (
            <div
              key={image}
              className={`rounded-[2rem] bg-cover bg-center shadow-xl ${
                index === 1 ? "h-80" : "h-64"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </section>

      <section id="search" className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-8">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: NAVY }}>
            Smart Search
          </p>

          {notice && (
            <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800">
              {notice}
            </p>
          )}

          <div className="mt-6 grid gap-4 lg:grid-cols-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search store, product, category..."
              className="rounded-2xl border px-4 py-3 text-sm outline-none lg:col-span-2"
            />

            <select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              className="rounded-2xl border px-4 py-3 text-sm"
            >
              <option>All Feelings</option>
              {feelings.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={store}
              onChange={(e) => setStore(e.target.value)}
              className="rounded-2xl border px-4 py-3 text-sm"
            >
              {stores.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border px-4 py-3 text-sm"
            >
              {allCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="rounded-2xl border px-4 py-3 text-sm"
            >
              {allProductTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="rounded-2xl border px-4 py-3 text-sm"
            >
              {discountOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              onClick={searchFinds}
              className="rounded-2xl px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: NAVY, color: GOLD }}
            >
              Search Finds
            </button>

            <button
              onClick={reset}
              className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      <section id="feelings" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em]" style={{ color: NAVY }}>
          Shop by Feeling
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">
          How do you want to feel today?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {feelings.map((item) => (
            <button
              key={item}
              onClick={() => feelingSearch(item)}
              className="rounded-[2rem] bg-white p-5 text-left shadow-lg transition hover:-translate-y-1"
            >
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: NAVY }}>
                Mood Match
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Generate finds that match this feeling.
              </p>
            </button>
          ))}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em]" style={{ color: NAVY }}>
          Featured Premium Finds
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">
          {loading ? "Loading finds..." : `${results.length} worth-it finds generated.`}
        </h2>

        <p className="mt-3 text-sm text-stone-600">
          LUMIÈRE may earn a commission from retailer links. This does not change your price.
        </p>

        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {results.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    product.image_url ||
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
                  })`,
                }}
              />

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-stone-500">
                    {product.store} · {product.category}
                  </p>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: GOLD, color: NAVY }}
                  >
                    {product.feeling}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold">{product.name}</h3>

                <div className="mt-4 flex items-end gap-3">
                  <span className="text-2xl font-semibold">
                    {money(product.sale_price)}
                  </span>
                  <span className="text-sm text-stone-400 line-through">
                    {money(product.original_price)}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ backgroundColor: BLUSH, color: CHARCOAL }}
                  >
                    {product.discount_percent || 0}% off
                  </span>
                </div>

                <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "#F4F1EC" }}>
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>
                    Worth-It Rating: {product.worth_it_rating || 0}/10
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    {product.reason || "Curated for style, value, and usefulness."}
                  </p>
                </div>

                <a
                  href={product.affiliate_url || "#"}
                  target="_blank"
                  className="mt-5 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold"
                  style={{ backgroundColor: NAVY, color: GOLD }}
                >
                  View the Find
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-stone-600">
        <div className="mb-4 flex flex-wrap gap-4">
          <a href="/disclosure">Affiliate Disclosure</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
        <p>
          LUMIÈRE may earn commissions from retailer links. Recommendations are
          curated based on style, value, discount quality, store trust, and usefulness.
        </p>
      </footer>
    </main>
  );
}
