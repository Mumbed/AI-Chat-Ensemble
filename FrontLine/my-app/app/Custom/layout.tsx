export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
			style={{ minHeight: 'calc(100vh - 6rem)' }} //nav바 높이만큼 공간 제거 = 스크롤 제거
		>
			<div className="inline-block text-center">
				{children}
			</div>
		</section>
	);
}
