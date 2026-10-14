"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./EgyptSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEXTS = {
  chapterAr: "الفصل الأول · مصر",
  chapterEn: "Chapter One · Egypt",
  headlineAr: "لم يكن بخورًا للزينة.",
  headlineEn: "It was not incense for decoration.",
  body1Ar:
    "في مصر القديمة كان البخور أداة مقدسة: في المعابد، وفي الطقوس، وفي حفظ الأجساد.",
  body1En:
    "In ancient Egypt, incense was a sacred instrument: in temples, in rituals, and in the preservation of bodies.",
  body2Ar: "المرّ واللبان واللوتس الأزرق — صمدت أربعة آلاف عام.",
  body2En:
    "Myrrh, frankincense, and blue lotus — enduring for four thousand years.",
  tag1Ar: "المرّ",
  tag1En: "Myrrh",
  tag2Ar: "اللبان",
  tag2En: "Frankincense",
  tag3Ar: "اللوتس الأزرق",
  tag3En: "Blue Lotus",
  watermarkAr: "عويق",
  watermarkEn: "3WEEQ",
  counter: "I",
} as const;

export function EgyptSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const body1Ref = useRef<HTMLDivElement>(null);
  const body2Ref = useRef<HTMLDivElement>(null);
  const tag1Ref = useRef<HTMLSpanElement>(null);
  const tag2Ref = useRef<HTMLSpanElement>(null);
  const tag3Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLSpanElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ═══════════════════════════════════════════
        // 1) حالة البداية — كل شيء مخفي قليلاً
        // ═══════════════════════════════════════════
        gsap.set(
          [
            chapterRef.current,
            headlineRef.current,
            body1Ref.current,
            body2Ref.current,
            tag1Ref.current,
            tag2Ref.current,
            tag3Ref.current,
            dividerRef.current,
            watermarkRef.current,
            counterRef.current,
          ],
          { autoAlpha: 0 }
        );

        // ═══════════════════════════════════════════
        // 2) دخول المشهد — قبل التثبيت
        // ═══════════════════════════════════════════
        const introTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });

        introTl
          .fromTo(
            counterRef.current,
            { autoAlpha: 0, x: -30 },
            { autoAlpha: 0.2, x: 0, duration: 0.8, ease: "power2.out" },
            0
          )
          .fromTo(
            chapterRef.current,
            { autoAlpha: 0, y: 30, rotation: -6 },
            { autoAlpha: 0.4, y: 0, rotation: -3, duration: 0.9, ease: "power2.out" },
            0.1
          )
          .fromTo(
            headlineRef.current,
            { autoAlpha: 0, y: 40, rotation: 5 },
            { autoAlpha: 1, y: 0, rotation: 2, duration: 1.1, ease: "power2.out" },
            0.25
          )
          .fromTo(
            dividerRef.current,
            { autoAlpha: 0, scaleX: 0 },
            { autoAlpha: 1, scaleX: 1, duration: 0.7, ease: "power2.out" },
            0.55
          )
          .fromTo(
            body1Ref.current,
            { autoAlpha: 0, x: 60, rotation: 3 },
            { autoAlpha: 0.95, x: 0, rotation: 1, duration: 0.9, ease: "power2.out" },
            0.6
          )
          .fromTo(
            body2Ref.current,
            { autoAlpha: 0, x: -60, rotation: -4 },
            { autoAlpha: 0.9, x: 0, rotation: -2, duration: 0.9, ease: "power2.out" },
            0.75
          )
          .fromTo(
            tag1Ref.current,
            { autoAlpha: 0, y: 20, rotation: -8 },
            { autoAlpha: 1, y: 0, rotation: -4, duration: 0.6, ease: "power2.out" },
            0.9
          )
          .fromTo(
            tag2Ref.current,
            { autoAlpha: 0, y: 20, rotation: 6 },
            { autoAlpha: 1, y: 0, rotation: 3, duration: 0.6, ease: "power2.out" },
            1.0
          )
          .fromTo(
            tag3Ref.current,
            { autoAlpha: 0, y: 20, rotation: -5 },
            { autoAlpha: 1, y: 0, rotation: -1, duration: 0.6, ease: "power2.out" },
            1.1
          )
          .fromTo(
            watermarkRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 0.5, duration: 0.8, ease: "power2.out" },
            1.2
          );

        // ═══════════════════════════════════════════
        // 3) التثبيت — توسع الصورة + خروج النصوص
        // ═══════════════════════════════════════════
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=260vh",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // الصورة تتوسع من 28vh إلى ملء الشاشة
        exitTl.fromTo(
          imageRef.current,
          { scale: 1 },
          { scale: 8, ease: "none", transformOrigin: "center center" },
          0
        );

        // الوسوم تخرج أولاً
        exitTl.to(
          tag1Ref.current,
          {
            autoAlpha: 0,
            x: -120,
            y: -40,
            rotation: -16,
            scale: 0.8,
            ease: "power2.in",
          },
          0.28
        );
        exitTl.to(
          tag2Ref.current,
          {
            autoAlpha: 0,
            x: 140,
            y: -20,
            rotation: 14,
            scale: 0.8,
            ease: "power2.in",
          },
          0.34
        );
        exitTl.to(
          tag3Ref.current,
          {
            autoAlpha: 0,
            x: 90,
            y: 80,
            rotation: -10,
            scale: 0.8,
            ease: "power2.in",
          },
          0.4
        );

        // الفقرات
        exitTl.to(
          body1Ref.current,
          {
            autoAlpha: 0,
            x: 160,
            y: 40,
            rotation: 4,
            scale: 0.9,
            ease: "power2.in",
          },
          0.46
        );
        exitTl.to(
          body2Ref.current,
          {
            autoAlpha: 0,
            x: -140,
            y: 60,
            rotation: -6,
            scale: 0.9,
            ease: "power2.in",
          },
          0.54
        );

        // الخط الفاصل
        exitTl.to(
          dividerRef.current,
          {
            autoAlpha: 0,
            scaleX: 0,
            transformOrigin: "left center",
            ease: "power2.in",
          },
          0.6
        );

        // العنوان
        exitTl.to(
          headlineRef.current,
          {
            autoAlpha: 0,
            scale: 1.16,
            y: -40,
            rotation: 3,
            ease: "power2.in",
          },
          0.66
        );

        // الفصل والعلامة والعداد
        exitTl.to(
          chapterRef.current,
          {
            autoAlpha: 0,
            x: 120,
            y: -60,
            rotation: -8,
            ease: "power2.in",
          },
          0.78
        );
        exitTl.to(
          watermarkRef.current,
          { autoAlpha: 0, y: 40, ease: "power2.in" },
          0.82
        );
        exitTl.to(
          counterRef.current,
          { autoAlpha: 0, scale: 1.04, ease: "power2.in" },
          0.86
        );
      });

      // ═══════════════════════════════════════════
      // 4) تقليل الحركة — عرض ثابت
      // ═══════════════════════════════════════════
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            chapterRef.current,
            headlineRef.current,
            body1Ref.current,
            body2Ref.current,
            tag1Ref.current,
            tag2Ref.current,
            tag3Ref.current,
            dividerRef.current,
            watermarkRef.current,
          ],
          { autoAlpha: 1, x: 0, y: 0, rotation: 0, scale: 1 }
        );
        gsap.set(counterRef.current, { autoAlpha: 0.2 });
        gsap.set(imageRef.current, { scale: 1 });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="egypt"
      dir="rtl"
      className={styles.section}
      aria-label="Egypt chapter — scroll-driven narrative"
    >
      {/* العداد — زخرفي */}
      <div className={styles.counter} ref={counterRef} aria-hidden="true">
        {TEXTS.counter}
      </div>

      {/* الفصل — محتوى دلالي */}
      <div className={styles.chapter} ref={chapterRef}>
        <span className={styles.chapterAr}>{TEXTS.chapterAr}</span>
        <span className={styles.chapterEn} lang="en">
          {TEXTS.chapterEn}
        </span>
      </div>

      {/* العنوان الرئيسي — h2 دلالي */}
      <h2 className={styles.headline} ref={headlineRef}>
        <span className={styles.headlineAr}>{TEXTS.headlineAr}</span>
        <span className={styles.headlineEn} lang="en">
          {TEXTS.headlineEn}
        </span>
      </h2>

      {/* الخط الفاصل — زخرفي */}
      <span
        className={styles.divider}
        ref={dividerRef}
        aria-hidden="true"
      />

      {/* الفقرة الأولى */}
      <div className={styles.body1} ref={body1Ref}>
        <p className={styles.body1Ar}>{TEXTS.body1Ar}</p>
        <p className={styles.body1En} lang="en">
          {TEXTS.body1En}
        </p>
      </div>

      {/* الفقرة الثانية */}
      <div className={styles.body2} ref={body2Ref}>
        <p className={styles.body2Ar}>{TEXTS.body2Ar}</p>
        <p className={styles.body2En} lang="en">
          {TEXTS.body2En}
        </p>
      </div>

      {/* الوسوم */}
      <div className={styles.tags}>
        <span ref={tag1Ref} className={styles.tag}>
          <span lang="ar">{TEXTS.tag1Ar}</span>
          <span lang="en">{TEXTS.tag1En}</span>
        </span>
        <span ref={tag2Ref} className={styles.tag}>
          <span lang="ar">{TEXTS.tag2Ar}</span>
          <span lang="en">{TEXTS.tag2En}</span>
        </span>
        <span ref={tag3Ref} className={styles.tag}>
          <span lang="ar">{TEXTS.tag3Ar}</span>
          <span lang="en">{TEXTS.tag3En}</span>
        </span>
      </div>

      {/* العلامة المائية — زخرفية */}
      <div className={styles.watermark} ref={watermarkRef} aria-hidden="true">
        <span className={styles.watermarkAr}>{TEXTS.watermarkAr}</span>
        <span className={styles.watermarkEn} lang="en">
          {TEXTS.watermarkEn}
        </span>
      </div>

      {/* الصورة — البطل */}
      <div className={styles.stage}>
        <div className={styles.imageWrap} ref={imageRef}>
          <Image
            src="/egypt.jpg"
            alt="Cinematic view of ancient Egypt"
            width={1080}
            height={1920}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}