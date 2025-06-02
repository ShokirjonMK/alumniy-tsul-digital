import { Pagination } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface NewsItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Alumni Networking Event 2024",
        description: "TSUL hosted a successful alumni networking event connecting over 200 graduates with current students.",
        imageUrl: "https://picsum.photos/200/200",
        date: "2024-05-20",
    },
    {
        id: 2,
        title: "Career Development Workshop",
        description: "A career workshop was organized to help students build their resumes and prepare for interviews.",
        imageUrl: "https://picsum.photos/200/200?grayscale",
        date: "2024-04-15",
    },
    {
        id: 3,
        title: "Alumni Mentorship Program",
        description: "The Alumni Mentorship Program connects alumni with students in need of career guidance.",
        imageUrl: "https://picsum.photos/id/236//200/200",
        date: "2024-03-10",
    },
    {
        id: 4,
        title: "TSUL Alumni Achievements",
        description: "Celebrating the achievements of our alumni who have made significant contributions in various fields.",
        imageUrl: "https://picsum.photos/seed/picsum/200/200",
        date: "2024-02-05",
    },
    {
        id: 5,
        title: "Alumni Reunion 2024",
        description: "Join us for the annual alumni reunion to reconnect with old friends and network with fellow graduates.",
        imageUrl: "https://picsum.photos/id/237/200/200",
        date: "2024-01-01",
    },
    {
        id: 6,
        title: "New Job Opportunities for Graduates",
        description: "Explore new job opportunities available for recent graduates through our career center.",
        imageUrl: "https://picsum.photos/id/241/200/200",
        date: "2023-12-15",
    },
];

const News: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 5;
    const total = newsData.length;

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8 text-blue-600">Latest News</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {newsData.map((news) => (
                    <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                            <p className="text-gray-600 text-sm mb-3">{news.description}</p>
                            <p className="text-gray-400 text-xs">Published on: {new Date(news.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className={window.location.pathname !== "/jobs" ? "flex justify-between mt-8" : "flex justify-center mt-8"}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={total}
                    onChange={(page) => setCurrentPage(page)}
                />
                {window.location.pathname !== "/jobs" && (
                    <button
                        onClick={() => (window.location.href = "/jobs")}
                        className="flex items-center gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-md text-sm"
                    >
                        Full News List <FaArrowRight />
                    </button>
                )}

            </div>
        </div>
    );
};

export default News;
