"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ result }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg hover:opacity-60 transition-opacity duration-200 object-cover h-32"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Image not found"
        ></Image>
        <div className="p-2 ">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold ">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
          {/* use heart icon for adding favourite */}
        </div>
      </Link>

      <div className="flex items-center justify-end">
        {isFavourite ? (
          <AiFillHeart
            className="h-6 text-red-500 mr-2 cursor-pointer"
            onClick={() => setIsFavourite(!isFavourite)}
          />
        ) : (
          <AiOutlineHeart
            className="h-6 text-red-500 mr-2 cursor-pointer"
            onClick={() => setIsFavourite(!isFavourite)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
