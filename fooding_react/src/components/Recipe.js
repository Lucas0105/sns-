import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

//무한 배너 넘기기
// https://solbel.tistory.com/187
const Recipe = ()=>{




    return(
        <div className="Recipe">
            <div className="logo">
                <img src="/images/f_logo.png"/>
            </div>
            <div className="swiper">
            <Swiper
                id="test-slide"
                className="banner"
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true 

                }}
                loop={true}
                loopAdditionalSlides = {1}
            >
                <SwiperSlide><img src="/recipe/event1.jpg"/></SwiperSlide>
                <SwiperSlide><img src="/recipe/event2.jpg"/></SwiperSlide>
                <SwiperSlide><img src="/recipe/event3.jpg"/></SwiperSlide>
                <SwiperSlide><img src="/recipe/event4.jpg"/></SwiperSlide>
            </Swiper>

            </div>
            <div>
                <div className="s-food">
                    <h2>추천 요리</h2>
                    <div>
                        <img src="/recipe/food1.jpg"/>
                        <br/>
                        고추장아찌황금레시피<br/>
                        고추장아찌담그는법<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>
                    <div>
                        <img src="/recipe/food2.jpg"/>
                        <br/>
                        셰프인더가든<br/>
                        식당부대찌개 밀키트 2인분<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                    <div>
                        <img src="/recipe/food3.jpg"/>
                        <br/>
                        반찬단지 두고두고 먹는 <br/>
                        우리집 대용량 반찬<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                    <div>
                        <img src="/recipe/food4.jpg"/>
                        <br/>
                        고추장아찌황금레시피<br/>
                        고추장아찌담그는법<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                </div>
                <div className="s-food">
                    <div>
                        <img src="/recipe/food5.jpg"/>
                        <br/>
                        초간단 떡볶이 만들기<br/>
                        꿀맛은 덤<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>
                    <div>
                        <img src="/recipe/food6.jpg"/>
                        <br/>
                        잔치국수 양념장 <br/>
                        황금레시피 이렇게~<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                    <div>
                        <img src="/recipe/food7.jpg"/>
                        <br/>
                        맛있는 가지 스테이크<br/>
                        맛보면 멈출 수 없어요.<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                    <div>
                        <img src="/recipe/food8.jpg"/>
                        <br/>
                        에어프라이어로 달콤한 <br/>
                        허니버터 고구마 만들기<br/>
                        <br/>
                        <button>둘러보기</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </div>

                </div>
            </div>

            <div className="b-food">
                
                <h2>Best Recipe</h2>
                
                <ul className="prod-list">
                    <li>
                        <img src="/recipe/food9.jpg"/>
                        <div className="caption">
                            <h3>부대찌개 황금레시피</h3>
                            <p>간만에 부대찌개 황금레시피 업로드를 위해</p>
                              
                            <p>끓였어요 ! 원래 제 레시피랑 비슷해서 놀랬던  </p>
                                
                            <p>백종원 부대찌개 바로 만들어 볼께요 !</p>
                            <br/>
                            <p>재료1 : 소세지 1팩 </p>
                            <p>재료2 : 고추장 2T </p>
                            <p>재료3 : 다진마늘 1T </p>
                            <p>재료4 : 설탕 1T </p>
                            <p>재료5 : 김치 1줌 </p>
                            <p>재료6 : 파 약간 </p>
                        </div>
                    </li>

                    <li>
                        <img src="/recipe/food10.jpg"/>
                        <div className="caption">
                            <h3>황태미역국 다이어트에 좋고 맛도 좋아~</h3>
                            <p>미역국을 참 좋아하는데 소고기 들어간 미역국 </p>
                              
                            <p>보다 몸에도 좋고 단백질은 풍부하지만</p>
                                
                            <p>칼로리가 낮은 황태로 진한 미역국을 끓여봅니다!!!</p>
                            <br/>
                            




                            <p>재료1 : 황태 </p>
                            <p>재료2 : 들기름 </p>
                            <p>재료3 : 국간장 </p>
                            <p>재료4 : 불린미역 </p>
                            <p>재료5 : 소금 </p>
                            <p>재료6 : 다진마늘 </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Recipe