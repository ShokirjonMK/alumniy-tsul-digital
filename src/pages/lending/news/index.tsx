import { Pagination, Modal } from "antd";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface NewsItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    fullContent?: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Alumni Networking Event 2024",
        description: "TSUL hosted a successful alumni networking event connecting over 200 graduates with current students.",
        imageUrl: "https://picsum.photos/200/200",
        date: "2024-05-20",
        fullContent: "The annual Alumni Networking Event took place on May 20, 2024, at the TSUL main campus. Over 200 alumni from various graduating classes returned to connect with current students and share their professional experiences. The event featured panel discussions, networking sessions, and career advice workshops. Keynote speaker and TSUL graduate John Smith shared insights about navigating the legal profession in today's competitive market.",
    },
    {
        id: 2,
        title: "Career Development Workshop",
        description: "A career workshop was organized to help students build their resumes and prepare for interviews.",
        imageUrl: "https://picsum.photos/200/200?grayscale",
        date: "2024-04-15",
        fullContent: "The Career Development Center hosted a comprehensive workshop series in April to prepare students for the job market. Sessions covered resume writing, interview techniques, LinkedIn profile optimization, and personal branding. Industry professionals from leading law firms participated as guest speakers and conducted mock interviews. Over 150 students attended the three-day event, with many reporting increased confidence in their job search skills.",

    },
    {
        id: 3,
        title: "Alumni Mentorship Program",
        description: "The Alumni Mentorship Program connects alumni with students in need of career guidance.",
        imageUrl: "https://picsum.photos/id/236//200/200",
        date: "2024-03-10",
        fullContent: "TSUL launched its revamped Alumni Mentorship Program this spring, pairing experienced graduates with current students. The program now features structured monthly meetings, career path guidance, and networking opportunities. Over 75 mentor-mentee pairs have been established across various legal specialties. Applications for the next cycle will open in September 2024.",

    },
    {
        id: 4,
        title: "TSUL Alumni Achievements",
        description: "Celebrating the achievements of our alumni who have made significant contributions in various fields.",
        imageUrl: "https://picsum.photos/seed/picsum/200/200",
        date: "2024-02-05",
        fullContent: "This year's Distinguished Alumni Awards recognized five graduates for their outstanding professional accomplishments and community service. Honorees included a Supreme Court justice, a human rights advocate, a corporate legal pioneer, a public defender, and an international law expert. The awards ceremony highlighted how TSUL graduates are shaping legal practice locally and globally.",

    },
    {
        id: 5,
        title: "Alumni Reunion 2024",
        description: "Join us for the annual alumni reunion to reconnect with old friends and network with fellow graduates.",
        imageUrl: "https://picsum.photos/id/237/200/200",
        date: "2024-01-01",
        fullContent: "Mark your calendars for the biggest alumni gathering of the year! The 2024 TSUL Reunion Weekend will take place June 7-9, featuring class-specific gatherings, campus tours, faculty lectures, and a gala dinner. Special celebrations are planned for milestone graduation years (classes ending in 4 and 9). Early bird registration is now open with discounted rates available until April 15.",

    },
    {
        id: 6,
        title: "New Job Opportunities for Graduates",
        description: "Explore new job opportunities available for recent graduates through our career center.",
        imageUrl: "https://picsum.photos/id/241/200/200",
        date: "2023-12-15",
        fullContent: "The Career Development Center has partnered with 35 new employers this semester, expanding job opportunities for graduates. Positions include judicial clerkships, corporate legal roles, public interest law, and government positions. The center reports a 20% increase in hiring compared to last year. Graduates are encouraged to schedule appointments with career counselors to discuss these opportunities.",

    },
];

const News: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const pageSize = 6;
    const total = newsData.length;

    const handleNewsClick = (news: NewsItem) => {
        setSelectedNews(news);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8 text-blue-600">Latest News</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {newsData.map((news) => (
                    <div
                        key={news.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                        onClick={() => handleNewsClick(news)}
                    >
                        <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.description}</p>
                            <p className="text-gray-400 text-xs">Published on: {new Date(news.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={window.location.pathname !== "/news" ? "flex justify-between mt-8" : "flex justify-center mt-8"}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={total}
                    onChange={(page) => setCurrentPage(page)}
                />
                {window.location.pathname !== "/news" && (
                    <button
                        onClick={() => (window.location.href = "/news")}
                        className="flex items-center gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-md text-sm"
                    >
                        Full News List <FaArrowRight />
                    </button>
                )}
            </div>

            {/* News Details Modal */}
            <Modal
                title={<span className="text-2xl font-bold text-blue-600">{selectedNews?.title}</span>}
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
                width={800}
            >
                {selectedNews && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500 text-sm">
                                Published: {new Date(selectedNews.date).toLocaleDateString()}
                            </p>
                        </div>

                        <img
                            src={selectedNews.imageUrl}
                            alt={selectedNews.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                {selectedNews.fullContent || selectedNews.description}
                            </p>
                        </div>

                    </div>
                )}
            </Modal>
        </div>
    );
};

export default News;